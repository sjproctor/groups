cohorts = [
  {
    name: "Alpha",
    year: "2020"
  },
  {
    name: "Bravo",
    year: "2020"
  }
]

cohorts.each do |cohort|
  Cohort.create cohort
end

alpha = Cohort.first

alpha_class = [
  {
    name: "Andee",
    absent: false
  },
  {
    name: "Art",
    absent: false
  },
  {
    name: "Austin",
    absent: false
  },
  {
    name: "Alejandro",
    absent: false
  },
  {
    name: "Cruz",
    absent: false
  },
]


alpha_class.each do |student|
  alpha.students.create student
end
