select "countries"."name" as "country",
       count("cities".*) as "citiesPerCountry"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId";
