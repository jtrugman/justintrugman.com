// Change py-36 when you put a more seamless transition above the divider component
import experienceInfo from "@/app/experienceInfo.json";
import ExperienceCard from "./experience-item-card";

const ItemsDivider = () => {
    return (
        <div className="py-36 px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {/* Work Experience Column */}
                <div className="space-y-4">
                    <div className="text-center font-medium mb-4">Work Experience</div> {/* Visible only on mobile */}
                    {experienceInfo.WorkExperience.map((item, index) => (
                        <ExperienceCard key={index}
                            title={item.Title}
                            subtitle={item.Subtitle}
                            link={item.Link}
                            cardColor="bg-warning"
                            textColor="text-base-200"
                            svgColor="stroke-base-200"
                        />
                    ))}
                </div>

                {/* Projects Column */}
                <div className="space-y-4">
                    <div className="text-center font-medium mb-4">Projects</div> {/* Visible only on mobile */}
                    {experienceInfo.Projects.map((item, index) => (
                        <ExperienceCard key={index}
                            title={item.Title}
                            subtitle={item.Subtitle}
                            link={item.Link}
                            cardColor="bg-accent"
                            textColor="text-base-200"
                            svgColor="stroke-base-200"
                        />
                    ))}
                </div>

                {/* Writings & Talks Column */}
                <div className="space-y-4">
                    <div className="text-center font-medium mb-4 ">Writings & Talks</div> {/* Visible only on mobile */}
                    {experienceInfo.WritingsAndTalks.map((item, index) => (
                        <ExperienceCard key={index}
                            title={item.Title}
                            subtitle={item.Subtitle}
                            link={item.Link}
                            cardColor="bg-info"
                            textColor="text-base-200"
                            svgColor="stroke-base-200"
                        />
                    ))}
                </div>

                {/* Media Features Column */}
                <div className="space-y-4">
                    <div className="text-center font-medium mb-4 ">Media Features</div> {/* Visible only on mobile */}
                    {experienceInfo.MediaFeatures.map((item, index) => (
                        <ExperienceCard key={index}
                            title={item.Title}
                            subtitle={item.Subtitle}
                            link={item.Link}
                            cardColor="bg-primary"
                            textColor="text-base-200"
                            svgColor="stroke-base-200"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemsDivider;