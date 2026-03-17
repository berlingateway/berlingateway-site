CREATE TABLE `referringDoctors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`referenceId` varchar(32) NOT NULL,
	`doctorName` text NOT NULL,
	`clinicOrHospital` text NOT NULL,
	`country` text NOT NULL,
	`patientCondition` text NOT NULL,
	`fileKeys` text NOT NULL,
	`fileUrls` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `referringDoctors_id` PRIMARY KEY(`id`),
	CONSTRAINT `referringDoctors_referenceId_unique` UNIQUE(`referenceId`)
);
