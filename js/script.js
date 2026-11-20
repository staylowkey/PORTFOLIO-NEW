const projets = [
    {
        titre: "Projet 1",
        description: "Description du projet 1",
        annee: 2024,
        lien: "https://example.com/projet1"
    },
    {
        titre: "Projet 2 ecole",
        description: "Description du projet 2",
        annee: 2020,
        lien: "https://example.com/projet2"
    },
    {
        titre: "Projet 3",
        description: "Description du projet 3",
        annee: 2026,
        lien: "https://example.com/projet3"
    },
    {
        titre: "Projet 4 ecole",
        description: "Description du projet 4",
        annee: 2026,
        lien: "https://example.com/projet3"
    }
]

const Latests = projets.filter((p) => p.annee >= 2025);

const Ttitles = projets.map((p) => p.titre);

const SchoolProjects = projets.filter((p) => p.titre.includes("ecole"));

const FirstSchoolProject = projets.find((p) => p.titre.includes("ecole"));

const {titre, description, annee, lien} = FirstSchoolProject;

    