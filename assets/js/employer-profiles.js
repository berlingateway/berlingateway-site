(function () {
  var sec = document.getElementById('pipeline');
  var grid = document.getElementById('candGrid');
  if (!sec || !grid || !grid.querySelector) return;
  // Initially hidden cards are unpublished drafts, not filter results.
  // Only removing hidden in the HTML before page load makes a profile available.
  var cards = [].slice.call(grid.querySelectorAll('.cand-card:not([hidden])'));
  var realCards = cards;
  var branche = 'alle', art = 'alle', saved = [];
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function mailAddr() {
    var a = document.querySelector('.contact-note a'); if (!a) return '';
    var t = (a.textContent || '').trim(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return t;
    var h = a.getAttribute('href') || ''; if (h.indexOf('mailto:') === 0) { var v = h.slice(7).split('?')[0]; if (v.indexOf('@') > 0) return v; }
    return '';
  }
  function refresh() {
    var visible = 0;
    cards.forEach(function (el) {
      var matchBranche = branche === 'alle' || el.dataset.branche === branche;
      var matchArt = art === 'alle' || el.dataset.art === art;
      var show = matchBranche && matchArt;
      el.hidden = !show;
      if (show) visible++;
      var fit = el.querySelector('[data-fit]'); if (fit) fit.hidden = !show || (branche === 'alle' && art === 'alle');
      var code = el.dataset.code, on = saved.indexOf(code) > -1, b = el.querySelector('[data-save]');
      if (b) { b.setAttribute('aria-pressed', on); b.textContent = on ? 'Vorgemerkt' : 'Vormerken'; }
    });
    $('candCount').textContent = visible + ' von ' + realCards.length + ' Profilen';
    var k = saved.length;
    $('candBarText').textContent = k ? k + (k === 1 ? ' Profil' : ' Profile') + ' in Ihrer Anfrage: ' + saved.join(', ') : 'Noch keine Profile vorgemerkt.';
    $('candSend').disabled = !k;
    $('candCompare').disabled = k < 2;
    $('candCompareHint').hidden = k !== 1;
    $('candBar').hidden = k === 0;
    var teaser = $('pflegeTeaser');
    var teaserVisible = !!teaser && branche === 'pflege' && art !== 'ausbildung';
    if (teaser) teaser.hidden = !teaserVisible;
    $('candEmpty').hidden = visible !== 0 || teaserVisible;
  }
  function openDlg(title, html) { var dlg = $('candDlg'), bar = $('candBar'); $('candDlgTitle').textContent = title; $('candDlgBody').innerHTML = html; if (dlg.showModal) { bar.classList.add('cand-bar--dialog-open'); dlg.addEventListener('close', function () { bar.classList.remove('cand-bar--dialog-open'); }, { once: true }); dlg.showModal(); } }
  function compose(subject, text) {
    var addr = mailAddr();
    openDlg('Anfrage prüfen', '<p>Die Seite versendet nichts selbst. ' + (addr ? 'Empfänger: <strong>' + esc(addr) + '</strong>' : 'Die Kontaktadresse ist gerade nicht lesbar. Nutzen Sie den Kontaktabschnitt.') + '</p>' +
      '<label for="candMsg" style="position:absolute;left:-9999px">Ihre Nachricht</label><textarea id="candMsg"></textarea>' +
      '<div class="cand-dlg-actions">' + (addr ? '<a class="btn btn--primary" id="candMail" href="#">Im E-Mail-Programm öffnen</a>' : '<span class="btn btn--primary cand-disabled" id="candMail" aria-disabled="true">E-Mail-Programm nicht verfügbar</span>') +
      '<button type="button" class="btn" id="candCopy" style="color:var(--navy);border:2px solid var(--navy);background:#fff;cursor:pointer">Text kopieren</button></div><p id="candCopyMsg" class="cand-count" role="status"></p>');
    var m = $('candMsg'); m.value = text;
    if (addr) { var ref = function () { $('candMail').href = 'mailto:' + addr + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(m.value); }; ref(); m.oninput = ref; }
    $('candCopy').onclick = function () {
      var say = function (t) { $('candCopyMsg').textContent = t; };
      var fallback = function () { m.focus(); m.select(); var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} say(ok ? 'Kopiert' : 'Text markiert – bitte kopieren'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(m.value).then(function () { say('Kopiert'); }, fallback); else fallback();
    };
  }
  function ask(codes) {
    var subject = codes.length === 1 && codes[0] === 'BG-TEC-001' ? 'Profilanfrage BG-TEC-001' : 'Profilanfrage ' + codes.join(', ');
    compose(subject, 'Guten Tag Berlin Gateway,\n\nwir interessieren uns für folgende Profile: ' + codes.join(', ') + '.\nBitte kontaktieren Sie uns für ein Kennenlerngespräch.\n\nMit freundlichen Grüßen');
  }
  function setFilter(name, value) {
    if (name === 'branche') branche = value; else art = value;
    [].forEach.call(document.querySelectorAll('[data-filter-group="' + name + '"] .cand-chip'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-' + name) === value)); });
    refresh();
  }
  [].forEach.call(document.querySelectorAll('[data-filter-group="branche"] .cand-chip'), function (b) { b.onclick = function () { setFilter('branche', b.dataset.branche); }; });
  [].forEach.call(document.querySelectorAll('[data-filter-group="art"] .cand-chip'), function (b) { b.onclick = function () { setFilter('art', b.dataset.art); }; });
  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.cand-card');
    if (!card || cards.indexOf(card) === -1 || card.hidden) {
      if (e.target.closest('[data-ask]')) e.preventDefault();
      return;
    }
    var s = e.target.closest('[data-save]'), a = e.target.closest('[data-ask]');
    if (s && s.dataset.save === card.dataset.code) { var c = s.dataset.save, i = saved.indexOf(c); if (i > -1) saved.splice(i, 1); else saved.push(c); refresh(); }
    if (a) { e.preventDefault(); if (a.dataset.ask === card.dataset.code) ask([a.dataset.ask]); }
  });
  $('emptyAsk').onclick = function (e) { e.preventDefault(); compose('Anfrage zu einem Fachkräfteprofil', 'Guten Tag Berlin Gateway,\n\nich interessiere mich für ein passendes Kurzprofil. Bitte kontaktieren Sie mich.\n\nMit freundlichen Grüßen'); };
  $('candSend').onclick = function () { ask(saved.slice()); };
  $('candCompare').onclick = function () {
    var ps = cards.filter(function (el) { return saved.indexOf(el.dataset.code) > -1; });
    if (ps.length < 2) return;
    var rows = [['Berufsfeld', 'branche'], ['Art', 'art'], ['Zielberuf', 'ziel'], ['Abschluss', 'qual'], ['Praxis', 'praxis'], ['Deutsch', 'lang'], ['Beginn', 'start'], [sec.dataset.locationLabel || 'Aufenthalt', 'aufenthalt'], ['Status', 'status'], ['Nächste Schritte', 'wegtext'], ['Passung', 'vor']];
    var label = function (key, val) {
      var chips = sec.querySelectorAll('[data-filter-group="' + key + '"] .cand-chip');
      for (var i = 0; i < chips.length; i++) {
        if (chips[i].getAttribute('data-' + key) === val) return chips[i].textContent.trim();
      }
      return val;
    };
    var soft = function (s) { return esc(s).replace(/Anpassungslehrgang/g, 'Anpassungs&shy;lehrgang').replace(/Aufnahmebereich/g, 'Aufnahme&shy;bereich').replace(/Kenntnisprüfung/g, 'Kenntnis&shy;prüfung').replace(/Langzeitpflege/g, 'Langzeit&shy;pflege').replace(/Zerspanungsmechaniker/g, 'Zerspanungs&shy;mechaniker').replace(/Technikerdiplom/g, 'Techniker&shy;diplom').replace(/Ausbildungsbewerber/g, 'Ausbildungs&shy;bewerber').replace(/Ausbildungsbetriebs/g, 'Ausbildungs&shy;betriebs').replace(/Fahrzeugtechnik/g, 'Fahrzeug&shy;technik').replace(/Funktionsdienst/g, 'Funktions&shy;dienst').replace(/Aufenthalt/g, 'Aufent&shy;halt').replace(/Arbeitgebervermittlung/g, 'Arbeitgeber&shy;vermittlung'); };
    openDlg('Ihre Auswahl im Vergleich', '<div class="cand-scroll"><table><thead><tr><th>Merkmal</th>' + ps.map(function (p) { return '<th>' + esc(p.dataset.code) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (r) { return '<tr><th>' + soft(r[0]) + '</th>' + ps.map(function (p) { return '<td>' + soft(label(r[1], p.dataset[r[1]])) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
  };
  $('candX').onclick = function () { $('candDlg').close(); };
  $('candDlg').addEventListener('click', function (e) { if (e.target === $('candDlg')) $('candDlg').close(); });
  [].forEach.call(sec.querySelectorAll('.cand-filter'), function (el) { el.hidden = false; });
  cards.forEach(function (card) {
    var save = card.querySelector('.cand-save');
    if (save) save.hidden = false;
  });
  sec.classList.add('cand-ready');
  refresh();
})();
