---
title: "{{ .Date }}-{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
author: Knut Behrends
date: {{ .Date }}
slug: {{ .Date }}
output:
  html_document:
    toc: false
    css: styles.css
    fig_caption: yes
    keep_md: no
image: /static/img/football.png
banner: img/post/thumb/football.png
categories:
  - blog-post
tags:
  - fun
  - R
summary: ""
keywords: ["Personal-Blog", "Fun", "rstats"]
---