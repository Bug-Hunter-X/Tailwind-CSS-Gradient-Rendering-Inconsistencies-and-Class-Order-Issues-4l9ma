# Tailwind CSS Gradient Bug

This repository demonstrates an uncommon bug related to Tailwind CSS's gradient functionality and the unexpected behavior that can occur when combining gradient classes with other background utilities.

## Problem

The primary issue lies in how Tailwind handles gradient classes (`bg-gradient-*`) when used in conjunction with other background utilities such as `bg-red-500`.  Inconsistent rendering across different browsers may also be observed.  In some cases, omitting parts of the gradient declaration or using an invalid color value can lead to unexpected results, such as a blank background or the gradient being entirely ignored.

## Solution

The solution focuses on carefully constructing the classes to ensure the gradient is applied correctly and takes precedence.  Understanding the order in which Tailwind processes class names is key to resolving this issue.  We provide an example of correct implementation, avoiding potential conflicts.