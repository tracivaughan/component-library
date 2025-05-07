---
layout: default
title: Accessible Responsive Tables
permalink: /components/tables/
---

# Accessible Responsive Tables

This component provides responsive, accessible HTML tables that work across devices and screen readers.

## Usage Guidelines

### When to Use
- When presenting tabular data that users need to compare or analyze
- When data has clear row and column relationships
- When users might need to sort or filter data

### When Not to Use
- For layout purposes (use CSS Grid or Flexbox instead)
- When data relationships are very complex
- When there are more than 8-10 columns on mobile devices

## Accessibility Features

- Proper table markup with `<th>` elements for headers
- ARIA labels for better screen reader navigation
- Responsive design that prevents horizontal scrolling on mobile
- High contrast mode support

## Code Example

### HTML Structure

```html
<table class="ds-table ds-table-responsive">
  <caption>Employee Information</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Department</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">John Smith</td>
      <td data-label="Position">Senior Designer</td>
      <td data-label="Department">UX Design</td>
      <td data-label="Location">New York</td>
    </tr>
    <!-- More rows here -->
  </tbody>
</table>
