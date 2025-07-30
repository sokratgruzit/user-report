SET STATISTICS TIME ON;

WITH RecursiveSubs AS (
    SELECT
        s.id,
        s.name,
        s.parent_id,
        0 AS sub_level
    FROM subdivisions s
    JOIN collaborators c ON c.subdivision_id = s.id
    WHERE c.id = 710253

    UNION ALL

    SELECT
        s.id,
        s.name,
        s.parent_id,
        rs.sub_level + 1
    FROM subdivisions s
    JOIN RecursiveSubs rs ON s.parent_id = rs.id
    WHERE s.id NOT IN (100055, 100059)
)

SELECT
    c.id,
    c.name,
    rs.name AS sub_name,
    rs.id AS sub_id,
    rs.sub_level,
    COUNT(*) OVER (PARTITION BY c.subdivision_id) AS colls_count
FROM collaborators c
JOIN RecursiveSubs rs ON c.subdivision_id = rs.id
WHERE c.age < 40
ORDER BY rs.sub_level ASC;
