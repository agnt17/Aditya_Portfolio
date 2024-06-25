import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="">
      <div className="flex flex-col justify-center mt-32 mx-auto text-base lg:text-lg text-blue-100 select-none max-w-4xl">
        <div className="p-4">
          I am currently pursuing a Bachelor of Technology degree at HBTU
          Kanpur. Over the past three years, I have immersed myself in the world
          of Web Development, acquiring extensive Technical and Practical
          skills, which I continue to expand.
        </div>
        <div className="p-4">
          In addition to my Web Development Experience, I have actively engaged
          in Competitive Programming. I have achieved the rank of{" "}
          <span className="text-orange-600 font-semibold text-xl lg:text-2xl">
            Knight on LeetCode
          </span>
          ,{" "}
          <span className="text-blue-400 font-semibold text-xl lg:text-2xl">
            3 Star on CodeChef
          </span>
          , and{" "}
          <span className="text-emerald-700 font-semibold text-xl lg:text-2xl">
            Pupil on Codeforces
          </span>
          . Over the past 2 to 3 years, I have solved approximately{" "}
          <span className="text-violet-600 font-semibold text-xl lg:text-2xl">
            <span className="text-2xl lg:text-3xl">1000+</span> Data Structures
            and Algorithms (DSA) and competitive programming problems.
          </span>
        </div>
        <div className="p-4">
          Moreover, I have gained practical experience in the field of{" "}
          <span className="text-yellow-400 font-semibold text-xl lg:text-2xl">
            {" "}
            Machine Learning
          </span>{" "}
          by working on real-world projects and earning various certificates in{" "}
          <span className="text-teal-500 font-semibold text-xl lg:text-2xl">
            {" "}
            Machine Learning
          </span>{" "}
          and{" "}
          <span className="text-rose-500 font-semibold text-xl lg:text-2xl">
            {" "}
            Deep Learning.
          </span>
        </div>
      </div>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
