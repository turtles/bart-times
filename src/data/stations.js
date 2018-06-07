export const trainAbbrToName = (abbr) => stations.find((item)=>item.abbr===abbr).name;

export const stations = [
  {abbr: "12th",	name: "12th St. Oakland City Center" },
  {abbr: "16th",	name: "16th St. Mission (SF)" },
  {abbr: "19th",	name: "19th St. Oakland" },
  {abbr: "24th",	name: "24th St. Mission (SF)" },
  {abbr: "ashb",	name: "Ashby (Berkeley)" },
  {abbr: "antc",	name: "Antioch" },
  {abbr: "balb",	name: "Balboa Park (SF)" },
  {abbr: "bayf",	name: "Bay Fair (San Leandro)" },
  {abbr: "cast",	name: "Castro Valley" },
  {abbr: "civc",	name: "Civic Center (SF)" },
  {abbr: "cols",	name: "Coliseum" },
  {abbr: "colm",	name: "Colma" },
  {abbr: "conc",	name: "Concord" },
  {abbr: "daly",	name: "Daly City" },
  {abbr: "dbrk",	name: "Downtown Berkeley" },
  {abbr: "dubl",	name: "Dublin/Pleasanton" },
  {abbr: "deln",	name: "El Cerrito del Norte" },
  {abbr: "plza",	name: "El Cerrito Plaza" },
  {abbr: "embr",	name: "Embarcadero (SF)" },
  {abbr: "frmt",	name: "Fremont" },
  {abbr: "ftvl",	name: "Fruitvale (Oakland)" },
  {abbr: "glen",	name: "Glen Park (SF)" },
  {abbr: "hayw",	name: "Hayward" },
  {abbr: "lafy",	name: "Lafayette" },
  {abbr: "lake",	name: "Lake Merritt (Oakland)" },
  {abbr: "mcar",	name: "MacArthur (Oakland)" },
  {abbr: "mlbr",	name: "Millbrae" },
  {abbr: "mont",	name: "Montgomery St. (SF)" },
  {abbr: "nbrk",	name: "North Berkeley" },
  {abbr: "ncon",	name: "North Concord/Martinez" },
  {abbr: "oakl",	name: "Oakland Int'l Airport" },
  {abbr: "orin",	name: "Orinda" },
  {abbr: "pitt",	name: "Pittsburg/Bay Point" },
  {abbr: "pctr",	name: "Pittsburg Center" },
  {abbr: "phil",	name: "Pleasant Hill" },
  {abbr: "powl",	name: "Powell St. (SF)" },
  {abbr: "rich",	name: "Richmond" },
  {abbr: "rock",	name: "Rockridge (Oakland)" },
  {abbr: "sbrn",	name: "San Bruno" },
  {abbr: "sfia",	name: "San Francisco Int'l Airport" },
  {abbr: "sanl",	name: "San Leandro" },
  {abbr: "shay",	name: "South Hayward" },
  {abbr: "ssan",	name: "South San Francisco" },
  {abbr: "ucty",	name: "Union City" },
  {abbr: "warm",	name: "Warm Springs/South Fremont" },
  {abbr: "wcrk",	name: "Walnut Creek" },
  {abbr: "wdub",	name: "West Dublin" },
  {abbr: "woak",	name: "West Oakland" }
]
