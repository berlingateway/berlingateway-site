CREATE TABLE `medicalReports` (
	`id` int AUTO_INCREMENT NOT NULL,
	`referenceId` varchar(32) NOT NULL,
	`patientName` text NOT NULL,
	`country` text NOT NULL,
	`medicalCondition` text NOT NULL,
	`fileKeys` text NOT NULL,
	`fileUrls` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `medicalReports_id` PRIMARY KEY(`id`),
	CONSTRAINT `medicalReports_referenceId_unique` UNIQUE(`referenceId`)
);
