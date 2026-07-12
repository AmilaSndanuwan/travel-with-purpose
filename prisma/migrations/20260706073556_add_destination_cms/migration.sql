-- CreateTable
CREATE TABLE `destinations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `bestTime` VARCHAR(191) NOT NULL,
    `imageUrl` TEXT NOT NULL,
    `highlights` TEXT NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `destinations_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
