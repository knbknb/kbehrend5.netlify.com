---
title: "{{ .Date }}-{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
author: Knut Behrends
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

```{r setup, include=FALSE}
library(knitr)

opts_chunk$set(cache = TRUE, warning = FALSE, message = FALSE, 
               echo = FALSE, tidy = FALSE, width = 7, fig.width=9)
options(digits = 3, tibble.print_min = 6)
options(knitr.table.format = "html") 
library(kableExtra) # formatting
```

#### Title


```{r abstr, echo=FALSE}
htmltools::HTML('<div class="alert alert-info"><b></b></div>')
```


#### Preprocessing 

Load the necessary packages

```{r pkgs, echo=TRUE, cache=FALSE}
library(tidyverse)

```

```{r theme}
library(ggthemes)
theme_set(theme_economist_white())
scale_colour_discrete <- function(...) scale_color_brewer(palette="Set1")
```









```{r}
htmltools::HTML('<div class="alert alert-info"><b>What I&apos; learned from doing this:</b>
<ul>
<li> 
<li> 
</ul>
</div>')
```
