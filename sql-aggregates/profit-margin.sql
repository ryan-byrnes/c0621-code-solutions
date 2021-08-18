select "title",
       "films"."replacementCost",
       sum("payments"."amount"),
       sum("payments"."amount") - "replacementCost" as "Profits"
  from "films"
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("customerId")
  group by "title", "films"."replacementCost"
  order by "Profits" desc
  limit 5;
