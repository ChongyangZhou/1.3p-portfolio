const Home = {
    template: `
    <div>
        Welcome to Chongyang's portfolio.
        <img src="job1.jpg" alt="Chongyang's Picture">
    </div>`
};
const Projects = {
    template: `
    <div>
    <h1> Following are the projects I have done in university</h1>
    <img src="job2.png" alt="Chongyang's Picture2">
        <table>
            <tr v-for="project in projects">
                <td>{{ project.name }}</td>
                <td>{{ project.description }}</td>
                <td>{{ project.year }}</td>
            </tr>
        </table>
    </div>`
    ,
    data() {
        return {
            projects: [
                { name: 'Bank system', description: 'SIT232', year: 2023 },
                { name: 'Zoo management system', description: 'SIT232', year: 2023 },
                { name: 'C# Application', description: 'SIT200', year: 2023 },
            ]
        }
    }
};

const Contact = {
    template: `
    <div class="contact-container">
        <h2>Please feel free to contact me</h2>
        
        <form v-if="!formSubmitted" class="contact-form">
            <div class="form-group">
                <input v-model="name" placeholder="Name">
                <input v-model="email" type="email" placeholder="Email">
            </div>
            <div class="form-group">
                <textarea v-model="message" placeholder="Message"></textarea>
            </div>
            <div class="form-group">
                <button @click.prevent="submitForm">Submit</button>
            </div>
        </form>
        <p v-if="formSubmitted">Thank you for reaching out, {{ name }}! We'll get back to you shortly.</p>
    </div>`,



    data() {
        return {
            name: '',
            email: '',
            message: '',
            formSubmitted: false
        }
    },
    methods: {
        submitForm() {
            console.log(this.name, this.email, this.message);
            // Handle submission logic here
            this.formSubmitted = true;
        }
    }
};


const About = { template: '<div>About content...</div>' };

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
