/*
   File: decision-tree.js
   Version: 1.1.0
   Description: Accessible, framework-free decision-tree flow.
   Namespace: bg-
*/
(() => {
    'use strict';

    const PROGRAMS = {
        daad: {
            name: 'DAAD',
            text: 'برامج متعددة تمنحها الحكومة الألمانية، أبرزها للماجستير والدكتوراه، وبشكل محدود للبكالوريوس.',
            target: 'daad'
        },
        epos: {
            name: 'DAAD مع EPOS',
            text: 'برامج DAAD متعددة. برنامج EPOS موجّه للمهنيين، ويُشترط عادة خبرة عملية لا تقل عن سنتين.',
            target: 'daad'
        },
        deutschlandstipendium: {
            name: 'Deutschlandstipendium',
            text: 'دعم شهري يقدّمه عبر الجامعة نفسها لطلاب البكالوريوس والماجستير؛ التقديم لدى الجامعة بعد القبول.',
            target: 'deutschlandstipendium'
        },
        institutions: {
            name: 'المؤسسات الألمانية (Stiftungen)',
            text: 'مؤسسات مستقلة تقدّم منحاً دراسية بحسب توجهاتها السياسية أو الاجتماعية أو الدينية.',
            target: 'institutions'
        },
        expatrio: {
            name: 'Expatrio',
            text: 'مسابقة منحة من شركة خاصة للبكالوريوس والماجستير؛ التقديم عادة عبر فيديو قصير.',
            target: 'private'
        }
    };

    const RESULTS = {
        B: { programs: ['daad', 'expatrio'], note: 'بعد قبولك في جامعة ألمانية يمكنك التقدم إلى Deutschlandstipendium عبر جامعتك.' },
        C: { programs: ['epos', 'expatrio', 'institutions'] },
        C0: { programs: ['daad', 'expatrio', 'institutions'] },
        D: { programs: ['epos', 'institutions'] },
        D0: { programs: ['daad', 'institutions'] },
        E: { programs: ['deutschlandstipendium', 'institutions'] }
    };

    const DISCLAIMER = 'هذه إرشادات عامة مأخوذة من الدليل أعلاه، وليست ضماناً لقبول أو تمويل. تتغير الشروط والمواعيد من برنامج إلى آخر، فراجع الصفحة الرسمية لكل برنامج قبل التقديم.';
    const PREVIOUS_VIEW = {
        step2: 'step1',
        step3: 'step2',
        resultB: 'step2',
        resultC: 'step3',
        resultC0: 'step3',
        resultD: 'step3',
        resultD0: 'step3',
        resultE: 'step1'
    };

    function createElement(tagName, className, text) {
        const node = document.createElement(tagName);
        if (className) node.className = className;
        if (typeof text === 'string') node.textContent = text;
        return node;
    }

    function initDecisionTrees() {
        document.querySelectorAll('#bg-decision-tree-container .bg-decision-tree').forEach((tree) => {
            if (tree.dataset.initialized === 'true') return;
            tree.dataset.initialized = 'true';
            tree.setAttribute('aria-live', 'polite');
            tree.setAttribute('aria-relevant', 'additions text');

            const state = {
                view: 'step1',
                answers: { location: null, level: null, experience: null }
            };

            function makeActionButton(label, action, className) {
                const button = createElement('button', className, label);
                button.type = 'button';
                button.dataset.action = action;
                return button;
            }

            function appendBackButton(parent) {
                const actions = createElement('div', 'bg-decision-tree__actions');
                actions.appendChild(makeActionButton('رجوع', 'back', 'bg-decision-tree__back'));
                parent.appendChild(actions);
            }

            function appendQuestionOptions(parent, questionId, field, options) {
                const group = createElement('div', 'bg-decision-tree__options');
                group.setAttribute('role', 'group');
                group.setAttribute('aria-labelledby', questionId);

                options.forEach((option) => {
                    const button = makeActionButton(option.label, 'answer', 'bg-decision-tree__button bg-decision-tree__option');
                    const selected = state.answers[field] === option.value;
                    button.dataset.value = option.value;
                    button.setAttribute('aria-pressed', String(selected));
                    if (selected) button.classList.add('bg-decision-tree__option--selected');
                    group.appendChild(button);
                });

                parent.appendChild(group);
            }

            function renderQuestion(step) {
                const configs = {
                    step1: {
                        question: 'أين أنت الآن؟',
                        field: 'location',
                        options: [
                            { label: 'ما زلت أخطّط للدراسة في ألمانيا', value: 'planning' },
                            { label: 'أدرس بالفعل في جامعة ألمانية', value: 'studying' }
                        ]
                    },
                    step2: {
                        question: 'ما المستوى الذي تريد الدراسة فيه؟',
                        field: 'level',
                        options: [
                            { label: 'بكالوريوس', value: 'bachelor' },
                            { label: 'ماجستير', value: 'master' },
                            { label: 'دكتوراه', value: 'doctorate' }
                        ],
                        back: true
                    },
                    step3: {
                        question: 'هل لديك خبرة عملية لا تقل عن سنتين؟',
                        field: 'experience',
                        options: [
                            { label: 'نعم', value: 'yes' },
                            { label: 'لا', value: 'no' }
                        ],
                        back: true
                    }
                };
                const config = configs[step];
                const questionId = `bg-decision-tree-${step}-question`;
                const panel = createElement('section', 'bg-decision-tree__step');
                panel.setAttribute('role', 'region');
                panel.setAttribute('aria-labelledby', questionId);

                const question = createElement('h3', 'bg-decision-tree__question', config.question);
                question.id = questionId;
                question.tabIndex = -1;
                panel.appendChild(question);
                appendQuestionOptions(panel, questionId, config.field, config.options);
                if (config.back) appendBackButton(panel);
                return panel;
            }

            function renderResult(resultKey) {
                const result = RESULTS[resultKey];
                const titleId = 'bg-decision-tree-result-title';
                const panel = createElement('section', 'bg-decision-tree__result');
                panel.setAttribute('role', 'region');
                panel.setAttribute('aria-labelledby', titleId);

                const title = createElement('h3', 'bg-decision-tree__question', 'قد تناسبك هذه الخيارات');
                title.id = titleId;
                title.tabIndex = -1;
                panel.appendChild(title);

                const cards = createElement('div', 'bg-decision-tree__cards');
                cards.setAttribute('role', 'list');
                result.programs.forEach((programKey) => {
                    const program = PROGRAMS[programKey];
                    const card = createElement('article', 'bg-decision-tree__card');
                    card.setAttribute('role', 'listitem');
                    card.appendChild(createElement('h4', 'bg-decision-tree__card-title', program.name));
                    card.appendChild(createElement('p', 'bg-decision-tree__result-text', program.text));

                    const details = createElement('a', 'bg-decision-tree__details', 'التفاصيل');
                    details.href = `#${program.target}`;
                    details.setAttribute('aria-label', `التفاصيل: ${program.name}`);
                    card.appendChild(details);
                    cards.appendChild(card);
                });
                panel.appendChild(cards);

                if (result.note) panel.appendChild(createElement('p', 'bg-decision-tree__note', result.note));
                panel.appendChild(createElement('p', 'bg-decision-tree__disclaimer', DISCLAIMER));

                const assessment = createElement('a', 'bg-decision-tree__assessment', 'ابدأ التقييم');
                assessment.href = '/ar/assessment';
                panel.appendChild(assessment);

                const actions = createElement('div', 'bg-decision-tree__actions');
                actions.appendChild(makeActionButton('رجوع', 'back', 'bg-decision-tree__back'));
                actions.appendChild(makeActionButton('ابدأ من جديد', 'restart', 'bg-decision-tree__restart'));
                panel.appendChild(actions);
                return panel;
            }

            function focusCurrentView() {
                const heading = tree.querySelector('.bg-decision-tree__question');
                if (!heading) return;
                heading.focus({ preventScroll: true });

                const rect = heading.getBoundingClientRect();
                let top = window.scrollY;
                if (rect.top < 16) top += rect.top - 16;
                else if (rect.bottom > window.innerHeight - 16) top += rect.bottom - (window.innerHeight - 16);
                if (top !== window.scrollY) {
                    window.scrollTo({ left: window.scrollX, top: Math.max(0, top), behavior: 'instant' });
                }
            }

            function render(moveFocus) {
                tree.setAttribute('aria-busy', 'true');
                const view = state.view.startsWith('result')
                    ? renderResult(state.view.slice('result'.length))
                    : renderQuestion(state.view);
                tree.replaceChildren(view);
                tree.hidden = false;
                tree.setAttribute('aria-busy', 'false');
                if (moveFocus) focusCurrentView();
            }

            tree.addEventListener('click', (event) => {
                if (!(event.target instanceof Element)) return;
                const button = event.target.closest('button[data-action]');
                if (!button || !tree.contains(button)) return;

                if (button.dataset.action === 'answer') {
                    const value = button.dataset.value;
                    if (state.view === 'step1') {
                        state.answers.location = value;
                        state.answers.level = null;
                        state.answers.experience = null;
                        state.view = value === 'studying' ? 'resultE' : 'step2';
                    } else if (state.view === 'step2') {
                        if (state.answers.level !== value) state.answers.experience = null;
                        state.answers.level = value;
                        state.view = value === 'bachelor' ? 'resultB' : 'step3';
                    } else if (state.view === 'step3') {
                        state.answers.experience = value;
                        if (state.answers.level === 'master') state.view = value === 'yes' ? 'resultC' : 'resultC0';
                        else if (state.answers.level === 'doctorate') state.view = value === 'yes' ? 'resultD' : 'resultD0';
                    }
                    render(true);
                } else if (button.dataset.action === 'back') {
                    if (PREVIOUS_VIEW[state.view]) {
                        state.view = PREVIOUS_VIEW[state.view];
                        render(true);
                    }
                } else if (button.dataset.action === 'restart') {
                    state.view = 'step1';
                    state.answers = { location: null, level: null, experience: null };
                    render(true);
                }
            });

            render(false);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDecisionTrees, { once: true });
    } else {
        initDecisionTrees();
    }
})();
