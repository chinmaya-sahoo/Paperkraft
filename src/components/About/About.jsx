import React from "react";
import InfiniteScroll from "../Home/InfiniteScroll";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-center mb-4">About Us</h1>
        {/* Scroll Section */}
        <InfiniteScroll  />
        {/* Description Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
            massa at urna tincidunt tristique. Donec vitae quam neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia quia reprehenderit consectetur earum suscipit odit a ratione labore autem natus saepe laborum neque, repellat dolor! Itaque suscipit at necessitatibus porro sunt quasi distinctio est doloribus numquam inventore debitis rem incidunt doloremque quisquam deleniti sit harum commodi reprehenderit, amet eaque? Qui dicta, id sapiente obcaecati aut quia totam quisquam similique aspernatur consequuntur in impedit expedita repellendus autem libero fugiat sed necessitatibus repellat ipsam. Esse non beatae reiciendis dicta sunt consequatur eos ut aut minus explicabo, tempora quam laboriosam tenetur, delectus recusandae. Ullam excepturi praesentium id incidunt vel! Quasi, corrupti!
          </p>
        </div>

        {/* Creator Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Creator</h2>
          <p className="text-gray-700">John Doe</p>
        </div>

        {/* Contact/Reports Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-gray-700">For inquiries, email us at example@example.com</p>
        </div>

        {/* Infinite Slider Placeholder */}
        {/* <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Infinite Slider</h2>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[Slider Placeholder]</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
