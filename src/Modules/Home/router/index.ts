import HomeView from "../Views/HomeView.vue";
import ReportesView from "../Modules/02-Reportes/Views/ReportesView.vue";

export default [{
    path: "/home",
    name: "home",
    component: HomeView,
    children:[
        {
            path: "/home/reportes",
            name: "reportes",
            component: ReportesView
        },
    ]
},
]