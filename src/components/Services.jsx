import { FaWrench, FaFirstAid, FaCog } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-slate-900 text-white pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Services I Offer</h2>
        <p className="text-lg mb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptatem inventore pariatur debitis totam eaque quisquam provident consectetur? Velit quidem consequatur assumenda neque harum sapiente reiciendis commodi debitis soluta accusantium?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaWrench className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Dummy Text</h3>
            <p className="text-center mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit iure corporis temporibus ipsa exercitationem nesciunt
              impedit modi, est quae harum eaque cumque provident sit maiores
              enim corrupti aspernatur dolores.
            </p>
            <a href="#" className="text-blue-500">
              Dummy Text
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaFirstAid className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Dummy Text</h3>
            <p className="text-center mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit iure corporis temporibus ipsa exercitationem nesciunt
              impedit modi, est quae harum eaque cumque provident sit maiores
              enim corrupti aspernatur dolores.
            </p>
            <a href="#" className="text-blue-500">
              Dummy Text
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaCog className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-4">Dummy Text</h3>
            <p className="text-center mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              suscipit iure corporis temporibus ipsa exercitationem nesciunt
              impedit modi, est quae harum eaque cumque provident sit maiores
              enim corrupti aspernatur dolores.
            </p>
            <a href="#" className="text-blue-500">
              Dummy Text
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
