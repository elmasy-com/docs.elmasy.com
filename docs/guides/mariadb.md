---
title: MariaDB
keywords: ["mariadb", "mysql"]
description: MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.
tags: ["mariadb", "mysql"]
---
# MariaDB

## Create database

```bash
create database my_database;
```

```bash
GRANT ALL PRIVILEGES ON my_database.* TO 'my_user'@'localhost' IDENTIFIED BY 'my_password' WITH GRANT OPTION;
```

```bash
flush privileges;
```