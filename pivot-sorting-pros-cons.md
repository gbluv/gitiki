When a user expands groups in SSRM pivot tables, the grid requests only a slice of the hierarchy, but sorting requires knowledge of the entire aggregated dataset, forcing the server to recompute sorted pivot results repeatedly for each expansion.

**Possible Issues to waatch out for**

1. Sorting may appear inconsistent when users expand rows.
The table only loads small portions of the data at a time, so when a user sorts the pivot table, the system may not yet know about all the other rows that exist. As a result, the order may look correct at first but change when more rows are expanded. This can confuse users because the table may appear to “re-sort” itself as they drill deeper.

2. Sorting can slow down the system.
To sort pivot data correctly, the server often needs to recalculate large parts of the dataset each time a user expands or sorts something. If the data is large, this can create extra processing work and longer wait times. Users might notice delays when interacting with the pivot table.

3. The total row may not match what users see on the screen.
The total usually represents the entire dataset, even if only part of it is currently visible in the table. Because users are only viewing a subset of rows, the numbers they see may not add up to the displayed total. This can lead to confusion or questions about how the totals are calculated.
