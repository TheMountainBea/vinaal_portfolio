import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';

// Import images
import imgInternship from '../assets/certificates/Vinaal_R_ python internship.png';
import imgMerit from '../assets/certificates/Merit Certificate.jpg';
import imgPythonCourse from '../assets/certificates/certificate_Vinaal_R_25BFT448111.png';
import imgSimplilearnFrontEnd from '../assets/certificates/Simplilearn Certificate_pages-to-jpg-0001.jpg';
import imgAIWorkshop from '../assets/certificates/AI-Workshop Certificate.jpg';
import imgGuvi from '../assets/certificates/GuviCertification - o5H1949WA2T9d271Q3.png';
import imgBrototypeWeb from '../assets/certificates/Recognition_page-0001.jpg';
import imgBrototypeCoding from '../assets/certificates/Coding Standards C & Java Certification_page-0001.jpg';
import imgIBMAI from '../assets/certificates/IBM AI Workshop.jpg';
import imgIBMEnterprise from '../assets/certificates/IBM-Certified.png';
import imgIBMProblem from '../assets/certificates/IBM Problem Solving & Controls.jpg';
import imgIBMCareer from '../assets/certificates/IBM Career Management Essential_page-0001.jpg';
import imgIBMComm from '../assets/certificates/IBM Communication & Personality Dynamics.jpg';
import imgGoogleFrontend from '../assets/certificates/Front-end for Beginners_certificate (1).jpg';
import imgGoogleAngular from '../assets/certificates/Angular_certificate.jpg';
import imgSimplilearnTech from '../assets/certificates/Tech for Everyone_certificate.jpg';
import imgSoloWebDev from '../assets/certificates/Web Development_certificate.jpg';
import imgSimplilearnJSInter from '../assets/certificates/JavaScript Intermediate_certificate.jpg';
import imgSimplilearnJS from '../assets/certificates/Introduction to JavaScript_certificate.jpg';
import imgSimplilearnCSS from '../assets/certificates/Introduction to CSS_certificate.jpg';
import imgSimplilearnHTML from '../assets/certificates/Introduction to HTML_certificate.jpg';
import imgGrooming from '../assets/certificates/Grooming-Certificate.png';

export default function Certifications() {
    const certifications = [
        {
            image: imgInternship,
            title: "Python Internship",
            subtitle: "Besant Technologies",
            handle: "Internship",
            borderColor: "#4285F4",
            gradient: "linear-gradient(145deg, #4285F4, #000)",
            url: "#"
        },
        {
            image: imgMerit,
            title: "Certificate of Merit",
            subtitle: "Scored Class First",
            handle: "Achievement",
            borderColor: "#FFD700",
            gradient: "linear-gradient(135deg, #FFD700, #000)",
            url: "#"
        },
        {
            image: imgPythonCourse,
            title: "Python Course Completion",
            subtitle: "Besant Technologies",
            handle: "Certification",
            borderColor: "#306998",
            gradient: "linear-gradient(150deg, #306998, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnFrontEnd,
            title: "Front-End",
            subtitle: "Simplilearn",
            handle: "Certification",
            borderColor: "#20B2AA",
            gradient: "linear-gradient(145deg, #20B2AA, #000)",
            url: "#"
        },
        {
            image: imgAIWorkshop,
            title: "Artificial Intelligence",
            subtitle: "Workshop",
            handle: "Workshop",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(160deg, #8B5CF6, #000)",
            url: "#"
        },
        {
            image: imgGuvi,
            title: "ChatGPT AI",
            subtitle: "GUVI HCL",
            handle: "Certification",
            borderColor: "#10B981",
            gradient: "linear-gradient(150deg, #10B981, #000)",
            url: "#"
        },
        {
            image: imgBrototypeWeb,
            title: "Brototype",
            subtitle: "Web Designing",
            handle: "Certification",
            borderColor: "#EF4444",
            gradient: "linear-gradient(155deg, #EF4444, #000)",
            url: "#"
        },
        {
            image: imgBrototypeCoding,
            title: "Brototype",
            subtitle: "Coding Standards C++ & Java",
            handle: "Certification",
            borderColor: "#EF4444",
            gradient: "linear-gradient(145deg, #EF4444, #000)",
            url: "#"
        },
        {
            image: imgIBMAI,
            title: "IBM",
            subtitle: "AI Workshop",
            handle: "Workshop",
            borderColor: "#0F62FE",
            gradient: "linear-gradient(135deg, #0F62FE, #000)",
            url: "#"
        },
        {
            image: imgIBMEnterprise,
            title: "IBM",
            subtitle: "Enterprise Grade AI",
            handle: "Certification",
            borderColor: "#0F62FE",
            gradient: "linear-gradient(145deg, #0F62FE, #000)",
            url: "#"
        },
        {
            image: imgIBMProblem,
            title: "IBM",
            subtitle: "Problem Solving & Controls",
            handle: "Soft Skills",
            borderColor: "#0F62FE",
            gradient: "linear-gradient(155deg, #0F62FE, #000)",
            url: "#"
        },
        {
            image: imgIBMCareer,
            title: "IBM",
            subtitle: "Career Management Essential",
            handle: "Soft Skills",
            borderColor: "#0F62FE",
            gradient: "linear-gradient(165deg, #0F62FE, #000)",
            url: "#"
        },
        {
            image: imgIBMComm,
            title: "IBM",
            subtitle: "Communication & Personality Dynamics",
            handle: "Soft Skills",
            borderColor: "#0F62FE",
            gradient: "linear-gradient(175deg, #0F62FE, #000)",
            url: "#"
        },
        {
            image: imgGoogleFrontend,
            title: "Google",
            subtitle: "Front-end",
            handle: "Certification",
            borderColor: "#4285F4",
            gradient: "linear-gradient(135deg, #4285F4, #000)",
            url: "#"
        },
        {
            image: imgGoogleAngular,
            title: "Google",
            subtitle: "Angular",
            handle: "Certification",
            borderColor: "#DD0031",
            gradient: "linear-gradient(145deg, #DD0031, #000)",
            url: "#"
        },
        {
            image: imgSoloWebDev,
            title: "SoloLearn",
            subtitle: "Web Development",
            handle: "Certification",
            borderColor: "#2563EB",
            gradient: "linear-gradient(135deg, #2563EB, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnTech,
            title: "SoloLearn",
            subtitle: "Tech for Everyone",
            handle: "Certification",
            borderColor: "#22D3EE",
            gradient: "linear-gradient(135deg, #22D3EE, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnJSInter,
            title: "SoloLearn",
            subtitle: "JavaScript Intermediate",
            handle: "Certification",
            borderColor: "#F7DF1E",
            gradient: "linear-gradient(145deg, #F7DF1E, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnJS,
            title: "SoloLearn",
            subtitle: "JavaScript",
            handle: "Certification",
            borderColor: "#F7DF1E",
            gradient: "linear-gradient(155deg, #F7DF1E, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnCSS,
            title: "SoloLearn",
            subtitle: "CSS",
            handle: "Certification",
            borderColor: "#264DE4",
            gradient: "linear-gradient(135deg, #264DE4, #000)",
            url: "#"
        },
        {
            image: imgSimplilearnHTML,
            title: "SoloLearn",
            subtitle: "HTML",
            handle: "Certification",
            borderColor: "#E34F26",
            gradient: "linear-gradient(135deg, #E34F26, #000)",
            url: "#"
        },
        {
            image: imgGrooming,
            title: "Grooming Certificate",
            subtitle: "Gillette Guard",
            handle: "Soft Skills",
            borderColor: "#EF4444",
            gradient: "linear-gradient(165deg, #EF4444, #000)",
            url: "#"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">Achievements</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        Certifications & <span className="text-gradient">Internships</span>
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-6">
                        Workshops & <span className="text-gradient">Training</span>
                    </h3>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Professional certifications and internship experiences that have shaped my technical journey.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', width: '100%', minHeight: '800px', height: 'auto' }}>
                    <ChromaGrid
                        items={certifications}
                        radius={350}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
        </section>
    );
}
