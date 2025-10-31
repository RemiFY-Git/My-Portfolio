import { motion } from "framer-motion";

export const Skills =()=>{
    const skills=[
        {name:"HTML", level:90, category:"frontend"},
        {name:"CSS", level:90, category:"frontend"},
        {name:"Javascript", level:50, category:"frontend"},
        {name:"React", level:75, category:"frontend"},
        {name:"Typescript", level:0, category:"frontend"},
        {name:"Tailwind CSS", level:70, category:"frontend"},
        {name:"Next.js", level:0, category:"frontend"},
        {name:"Three.js", level:0, category:"frontend"},
        //Backend
        {name:"Nest JS", level:0, category:"backend"},
        {name:"Laravel", level:0, category:"backend"},
        {name:"MongoDB", level:0, category:"backend"},
        //Tools
        {name:"Git/GitHub", level:80, category:"tools"},
        {name:"Figma", level:0, category:"tools"},
        {name:"Vs Code", level:95, category:"tools"},

    ]
    const neonColors=[
        "#ff00cc", //pink
        "#9966ff", //purple
        "#3249ccff", //blue
    ];
    return(
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-glow text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center text-secondary">
                    {skills.map((skills, key)=>{
                        const neon = neonColors[key % neonColors.length];
                        return(
                            <motion.div
                                key={key}
                                initial={{opacity:0, scale:0.6}}
                                whileInView={{opacity:1, scale:1}}
                                transition={{duration:0.6, delay: key * 0.08}}
                                viewport={{once: true}} 
                                className="relative w-32 h-32 border-2 flex flex-col items-center justify-center"
                                style={{
                                    borderColor:neon,
                                    boxShadow:`0 0 10px 6px ${neon}`,
                                    background:"transparent"
                                }}
                                >
                                    <div className="text-2xl font-bold" style={{color:neon}}>
                                        {skills.level}%
                                    </div>
                                    <div className="text-sm mt-1 text-primary uppercase tracking-wide">{skills.name}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} ;