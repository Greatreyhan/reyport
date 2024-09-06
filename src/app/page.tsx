'use client'
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ListProject from "./components/listProject";
import ListExperience from "./components/listExperience";
import W1 from "/public/img/W1.png"
import W2 from "/public/img/W2.png"
import W3 from "/public/img/W3.png"
import W4 from "/public/img/W4.png"
import W5 from "/public/img/W5.png"
import P1 from "/public/img/P1.png"
import P2 from "/public/img/P2.png"
import P3 from "/public/img/P3.png"
import P4 from "/public/img/P4.jpeg"
import P5 from "/public/img/P5.png"
import P6 from "/public/img/P6.png"
import P7 from "/public/img/P7.png"
import P8 from "/public/img/P8.png"
import P9 from "/public/img/P9.png"
import ListWork from "./components/listWork";

export default function Home() {
  return (
    <main className="bg-black text-slate-100">
      <Navigation />
      <Hero />

      {/* Executive Summary */}
      <div className="mx-auto w-10/12 flex" style={{ fontFamily: 'Baskervville SC, serif' }}>
        <h2 className="text-5xl font-sans font-semibold">About Me &<br /> My Work<span className="text-orange-500">.</span></h2>
        <div className="flex-1 text-md mx-8">
          <p className="text-justify text-slate-100">I am an Electrical Engineering student at Diponegoro University specializing in electronics, robotics, and automation. I have hands-on experience in enhancing automated systems, such as improving the control range of an excavator by 40% using MQTT during my internship at PT Asta Berkah Autonomous. As a Project Manager at PT Widya Solusi Utama, I increased email open rates by 9.77% through targeted analysis and led the installation of automated fingerprint systems. My leadership at the Undip Robotic Development Center resulted in an 80% increase in teams qualifying for the Indonesian Robot Contest. Proficient in C, Python, JavaScript, SolidWorks, Eagle, and Figma, I am passionate about robotics, automation, green energy, and team management.</p>
        </div>
      </div>

      {/* Project Showcase */}
      <div id="project" className="mx-auto w-10/12 mt-24 border-b border-opacity-25 border-slate-300">
        <h2 className="text-5xl font-sans font-semibold">Work Showcase<span className="text-orange-500">.</span></h2>
        
        <ListWork title={"Goods Management Web Application - DML"} subtitle={"Full-Stack Developer"} image={W1} link={'https://dml.higenncy.com/'} desc={"As a Full-Stack Developer, I led the development of a logistics management platform for PT Dimana-Mana Logistik, utilizing the MERN stack to digitize and automate their shipment process. This project aimed to centralize logistics-related operations into a streamlined web application within a one-month timeframe. I was responsible for both front-end and back-end development, ensuring the platform was user-friendly, scalable, and efficient."} />
        <ListWork title={"Market Place - Photoinstaxsemarang"} subtitle={"Full-Stack Developer"} image={W4} link={'https://photoinstaxsemarang.com/'} desc={"As a Full-Stack Developer, I developed a marketplace web application for Photoinstaxsemarang, a store specializing in the sale and printing of Polaroid photos in various types and formats. The platform, built using the MERN Stack, includes a customer ordering system with order tracking and an admin panel to manage inventory, purchases, and revenue."} />
        <ListWork title={"Event Registration - CIMB Niaga"} subtitle={"Full-Stack Developer"} image={W5} link={'https://www.cimbniaga.co.id/id/personal/pengumuman/kejar-mimpi-rising-start-2024'} desc={"For the Rising Start event registration website from CIMB Niaga, I worked as a Full-Stack Developer to create a comprehensive platform using the MERN Stack. The website facilitated the registration process for participants and provided detailed information about the singing competition. It also included a verification system to ensure that only eligible participants could register."} />
        <ListWork title={"Landing Page - Abdurrahman & Co"} subtitle={"Full-Stack Developer"} image={W3} link={'https://abdurrahman.co.id/'} desc={"As a Full-Stack Developer, I developed a landing page with a blog article section and an admin panel for managing articles, using the MERN Stack for Lawfirm Abdurrahman & Co. This law firm, based in Semarang, operates with the vision of 'humanizing humanity' by ensuring justice for those who seek it. Their mission is to work professionally and progressively, providing high-quality services to maintain trust and client satisfaction, aiming to become a model for legal practice in Indonesia."} />
        <ListWork title={"Landing Page - Temps Lawfirm"} subtitle={"Full-Stack Developer"} image={W2} link={'https://temps-lawfirm.web.app/'} desc={"As a Full-Stack Developer, I developed a landing page for TEMPS, a prominent group of companies in Indonesia that has contributed to the food and economic sectors for over a decade. TEMPS provides professional legal consulting services, actively engaging in various key industries, including trade, manufacturing, construction, transportation, and legal consulting."} />
  
      </div>

      {/* Project Showcase */}
      <div id="project" className="mx-auto w-10/12 mt-24 border-b border-opacity-25 border-slate-300">
        <h2 className="text-5xl font-sans font-semibold">Project Showcase<span className="text-orange-500">.</span></h2>
        
        <ListProject title={"Plant Seed Quality Enhancement Box Utilizing Extremely Low Frequency Electromagnetic Fields and Internet of Things Integration"} subtitle={"PKM-KC 2021 Funding Awardee - Simbelmawa, Kemdikbud, Indonesia"} image={P1} link={'/project/1'} desc={"The Plant Seed Quality Enhancement Box is an advanced device designed to improve seed quality by utilizing extremely low frequency (ELF) electromagnetic fields. Powered by the ESP32 microcontroller, the device adjusts the electromagnetic field frequency according to the specific needs of different plant species, ensuring optimal conditions for seed enhancement. Integrated with an Android application built using React Native, users can remotely monitor and control the device, tracking each step of the electromagnetic exposure process until the seeds are ready for planting. This seamless combination of IoT technology and precise electromagnetic field management offers a modern and efficient solution for boosting seed quality and supporting sustainable agricultural practices."} />
        <ListProject title={"Gravitational Water Vortex Power Plant (GWVPP) and Archimedes Screw Turbine"} subtitle={"Top 10 of Hackathon Energy [Re]Spark | New Energy Nexus"} image={P2} link={'/project/2'} desc={"The Archimedes Screw Turbine utilizes a large helical screw to convert the energy of flowing or falling water into mechanical energy. Water flowing into the screw’s grooves drives its rotation, which is then used to generate electricity. Ideal for low to medium head applications with steady water flow, this turbine is known for its environmental friendliness and durability. In contrast, the Gravitational Water Vortex Turbine harnesses the energy of a vortex formed by water swirling in a specially designed tank. As the vortex spins, it drives a turbine at the center, efficiently generating power from low head conditions. Both technologies are suited for renewable energy production in small-scale hydro applications, with minimal ecological impact."} />
        <ListProject title={"Automatic IoT-Based Tree Seedling Planter as a Solution to Accelerate Reforestation Rates in Support of the 2030 Sustainable Development Goals (SDGs)."} subtitle={"PKM-KC 2022 PIMNAS & Funding Awardee - Simbelmawa, Kemdikbud, Indonesia"} image={P3} link={'/project/3'} desc={"This device utilizes MQTT (Message Queuing Telemetry Transport) communication implemented on an ESP32 board. It is equipped with a camera that allows real-time monitoring of the planting area. Through a connected web application, users can control the device to automatically plant tree seedlings in flat areas. The system enables remote monitoring and control, ensuring that the seedling planting process is carried out accurately and efficiently. This integration of IoT technology not only streamlines the reforestation process but also provides users with the ability to oversee and manage the planting operation from a distance."} />
        <ListProject title={"Andromeda Robotic Team for Kontes Robot SAR Indonesia."} subtitle={"Finalist Kontes Robot SAR Indonesia (KRSRI) | Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi"} image={P4} link={'/project/4'} desc={"In the Andromeda Robotic Team, my role involved programming the hexapod robot, focusing on both the kinematics of its legs and the integration of sensor data to ensure accurate movement across the competition arena. I was responsible for developing the kinematic models that control the individual movements of the robot's six legs, allowing it to navigate complex terrains with stability and precision. Additionally, I implemented algorithms that process sensor readings to adapt the robot's movements based on real-time environmental conditions, ensuring that the robot could effectively respond to obstacles and follow the designated path in the arena. This work required a deep understanding of robotic motion control and sensor integration, ensuring that the robot could perform its search and rescue tasks efficiently."} />
        <ListProject title={"Sustainable Empowerment of Farmer Groups through Pitro Green System Technology in Efforts to Increase Crop Productivity in Pitrosari Village, Temanggung Regency."} subtitle={"PPK Ormawa Funding Awardee - Simbelmawa, Kemdikbud, Indonesia"} image={P5} link={'/project/5'} desc={"I developed an automated greenhouse system that includes plant watering and integrated monitoring. The system is connected to an application built using the React Native framework, enabling users to control and monitor the greenhouse environment remotely. Data transfer between the sensors and the application is facilitated using MQTT communication, ensuring real-time updates and efficient management of the greenhouse conditions. The greenhouse is powered by a 400Wp solar panel, which provides energy to operate the pump and other electrical components, making the system both efficient and environmentally friendly. This project highlights my expertise in IoT development, mobile app integration, and the use of renewable energy sources for seamless automation."} />
        <ListProject title={"Optimization of Warehouse Automated Guided Vehicle with Indoor Positioning System-Based Navigation and Artificial Intelligence Algorithms to Enhance Industrial Warehouse Efficiency"} subtitle={"Gold Medal at World Young Inventors Exhibition 2024 | ITEX, Malaysia"} image={P6} link={'/project/6'} desc={"In the project the system was divided into three main components: the drive system, the data acquisition system, and the digital twin system. I played a key role in each of these areas. I designed the PCB schematic and programmed the STM32 microcontroller to control the drive system, which involved developing the kinematics for the omnidirectional mobile robot, ensuring smooth and precise movement. For the data acquisition system, I integrated various sensors to provide real-time feedback, essential for the AGV's autonomous operation. I also developed the digital twin system, which enabled real-time monitoring and visualization of the AGV's movement, allowing for predictive maintenance and process optimization. Additionally, I was responsible for integrating obstacle avoidance capabilities, ensuring the AGV could navigate safely and efficiently within the warehouse environment. This comprehensive approach to system integration demonstrated my ability to manage complex projects and deliver intelligent automation solutions that enhance industrial efficiency."} />
        <ListProject title={"Optimization of Dye-Sensitized Solar Cells Based on Red Cabbage, Teak Leaves, and Triphenylamine with Magnesium Dopant as a Means to Enhance Solar Energy Accessibility"} subtitle={"PKM-RE 2023 Funding Awardee - Simbelmawa, Kemdikbud, Indonesia "} image={P7} link={'/project/7'} desc={"One crucial component affecting the performance of DSSCs is the dye. DSSCs can use natural dyes extracted from various plant parts containing betalains, carotenoids, chlorophyll, and flavonoids as photosensitizers. However, most natural dyes have a narrow light absorption wavelength range (Pratiwi et al., 2017). According to research by Chang et al. (2013) in Pratiwi et al. (2017), the combination of anthocyanin and chlorophyll pigments results in higher efficiency, as it expands the light absorption spectrum."} />
        <ListProject title={"Smart Electrifying Agriculture Integrated with IoT Through the Implementation of the Quine-McCluskey Algorithm"} subtitle={"Innovillage 2022 Funding Awardee | Telkom Indonesia"} image={P8} link={'/project/8'} desc={"This project aims to revolutionize agricultural practices by integrating smart automation powered by IoT and solar energy. The system is designed to automate and optimize agricultural processes like lighting and irrigation, enhancing efficiency and sustainability."} />
        <ListProject title={"Nutrizen: Know Your Nutrition - Track Nutrients & Detect Calories"} subtitle={"Bangkit Academy Capstone Project - Simbelmawa, Kemdikbud, Indonesia "} image={P9} link={'/project/9'} desc={"As part of Bangkit 2023, this capstone project aimed to empower individuals to take control of their health through better understanding and management of their daily nutrient intake. Nutrizen is a mobile application designed to track nutrients and detect calories, providing users with a simple yet effective tool for improving their dietary habits.."} />

      </div>

      {/* Experience */}
      <div id="experience" className="mx-auto w-10/12 mt-24 border-b border-opacity-25 border-slate-300">
        <h2 className="text-5xl font-sans font-semibold text-center my-4">My Experience<span className="text-orange-500">.</span></h2>

        <ListExperience title={"PT Asta Berkah Autonomous"} position={"Embedded Engineer Intern"} place={"Semarang (ID)"} period={"January 2023 - March 2023"} desc1={"Enhanced the control range of an automated excavator by 40% by implementing MQTT communication over the internet, replacing the previous Bluetooth system."} desc2={"Designed and developed a web-based application for excavator control, enabling access and operation from multiple devices."} />
        <ListExperience title={"PT Widya Solusi Utama"} position={"Engineer & Project Manager"} place={"Semarang (ID)"} period={"April 2023 - June 2024"} desc1={"Increased email marketing open rate by 9.77% through user data analysis to target advertisements based on age and product type in an email blasting project for lelang.go.id (Ministry of Finance of Republic Indonesia)."} desc2={"Led the technical team in the installation of 6 automated fingerprint systems, overseeing the entire process from development to user training for PT Adaro Minerals Indonesia Tbk (North Kalimantan)."} />
        <ListExperience title={"Undip Robotic Development Center (URDC)"} position={"Head of Research"} place={"Semarang (ID)"} period={"February 2021 - February 2023"} desc1={"Increased the number of teams qualifying for the Indonesian Robot Contest by 80% compared to the previous year through the implementation of a flexible and intensive robotics learning program curriculum"} desc2={"Developed an online learning model using web applications to adapt to the conditions of the COVID-19 pandemic."} />
        <ListExperience title={"UKM Research and Business (RnB)"} position={"Manager of Media Department"} place={"Semarang (ID)"} period={"March 2021 - March 2023"} desc1={"Increased social media engagement and views by 20% through the implementation of the AIDA (Attention, Interest, Desire, Action) model."} desc2={"Developed Standard Operating Procedures (SOPs) for collaborative editing using online editing software to streamline design processes."} />

      </div>

      {/* Achievement */}
      <div className="mx-auto w-10/12 mt-24">
        <h2 className="text-5xl font-sans font-semibold text-right my-4">My Achievement<span className="text-orange-500">.</span></h2>
        <p className="border-l-2 px-4 border-orange-500 font-bold text-xl mt-8">2019</p>
        <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="text-md list-disc mt-2">
          <li>1<sup>st</sup> place in Olimpiade Sains Nasional Tingkat Wilayah II | Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</li>
        </ul>
        <p className="border-l-2 px-4 border-orange-500 font-bold text-xl mt-8">2021</p>
        <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="text-md list-disc mt-2">
          <li>Gold Medal in applied technology | IEI2C Indonesian Education International Innovation Competition</li>
          <li>1<sup>st</sup> place in Science Paper Competition | ELINATION Universitas Negeri Yogyakarta</li>
        </ul>
        <p className="border-l-2 px-4 border-orange-500 font-bold text-xl mt-8">2022</p>
        <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="text-md list-disc mt-2">
          <li>2<sup>nd</sup> place in PKM-PI Universitas Diponegoro | PIM Universitas Diponegoro</li>
          <li>3<sup>rd</sup> place in National-level Research finalists in applied technology | 7 th Agrifasco | HIMAREKTA ITB 2022</li>
          <li>3<sup>rd</sup> place in Lomba Inovasi Program Pemberdayaan dan Pembangunan Desa (LIP3D) | Institut Teknologi Bandung</li>
          <li>PIMNAS 2022 | Simbelmawa, Kemdikbud, Indonesia</li>
          <li>Top 10 Innovation Green Technopreneur Competition PFSains 2022 | Pertamina Foundation</li>
          <li>Top 10 Digital Innovation and Technology Competition 2022: Future of Energy | ASTRA</li>
          <li>Top 10 of Start Up Energy Transition Innovation Challenge | Kementerian Energi dan Sumber Daya Mineral</li>
          <li>Top 10 of Hackathon Energy [Re]Spark | New Energy Nexus</li>
          <li>Innovillage 2022 Funding Awardee | Telkom Indonesia</li>
        </ul>
        <p className="border-l-2 px-4 border-orange-500 font-bold text-xl mt-8">2023</p>
        <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="text-md list-disc mt-2">
          <li>PKM-KC 2023 Funding Awardee | Simbelmawa, Kemdikbud, Indonesia</li>
          <li>PKM-RE 2023 Funding Awardee | Simbelmawa, Kemdikbud, Indonesia</li>
          <li>Finalist Kontes Robot SAR Indonesia (KRSRI) | Kementerian Pendidikan, Kebudayaan, Riset,  dan Teknologi</li>
          <li>Karya Salemba Empat Scholarship Awardee | KSE</li>
        </ul>
        <p className="border-l-2 px-4 border-orange-500 font-bold text-xl mt-8">2024</p>
        <ul style={{ fontFamily: 'Baskervville SC, serif' }} className="text-md list-disc mt-2">
          <li>Gold Medal at World Young Inventors Exhibition 2024 | ITEX, Malaysia</li>
        </ul>
      </div>

      {/* Contact Me  */}

      <div className="mt-32" id="contact">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="block">
                      I am Looking For Opportunity to Colaborate With You
                  </span>
                  <span className="block mt-4" style={{ fontFamily: 'Baskervville SC, serif' }}>
                      Feel Free to Contact Me<span className="text-orange-500">.</span>
                  </span>
              </h2>
              <div className="lg:mt-0 lg:flex-shrink-0">
                  <div className="mt-12 inline-flex rounded-md shadow">
                      <a href="mailto:joinreyhan@gmail.com" style={{ fontFamily: 'Baskervville SC, serif' }} className="py-4 px-8  bg-orange-600 hover:bg-orange-700 hover:text-black focus:ring-orange-500 focus:ring-orange-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                          Contact Me.
                      </a>
                  </div>
              </div>
          </div>
      </div>


      <Footer />
    </main>
  );
}
