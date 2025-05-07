---
layout: default
title: Accessible Responsive Tables
permalink: /components/tables/
---

# Accessible Responsive Tables

This component provides responsive, accessible HTML tables that work across devices and screen readers.

## Usage Guidelines

### When to Use
- When presenting tabular data that users need to compare or analyze, such as financial accounts or reporting data
- When data has clear row and column relationships that need to be highlighted

### When Not to Use
- For layout purposes (use CSS Grid or Flexbox instead)
- When data relationships are very complex; often multiple simple tables can be a better solution
- When the information can be appropriately presented as a list (for example, some search results)

## Noteworthy Features

- Proper table markup with `<th>` elements for headers
- ARIA labels for better screen reader navigation
- Responsive design that prevents horizontal scrolling on mobile
- High contrast mode support
- Required captions are styled so they are available for screen readers but hidden from visual display
- Optional styling for columns containing amounts, so they align to the right
- Optional formatting to control widths across multiple tables
- Optional table footer for totals

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
