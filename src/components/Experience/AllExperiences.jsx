import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Customer Service Executive",
    company: "SoftWebWork Pvt. Ltd.",
    date: "Sep 2020 - Mar 2022",
    responsibilities: [
      "Handled calls, emails, and live chats for customer support.",
      "Delivered excellent service by addressing customer concerns.",
      "Maintained deep product and service knowledge",
      "Resolved customer issues quickly and accurately",
    ],
  },
  {
    job: "IT Support Specialist",
    company: "SoftWebWork Pvt. Ltd.",
    date: "Apr 2022 - July 2024",
    responsibilities: [
      "Delivered IT support to minimize downtime and enhance UX.",
      "Improved site performance by fixing bugs, UI issues, and responsiveness.",
      "Maintained and optimized Designer Optics’ front-end using HTML, CSS, and JS.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;