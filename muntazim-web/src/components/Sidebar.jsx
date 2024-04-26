import React from "react";
import {Link, useParams} from "react-router-dom";
import assets from "../assets";
import {activeLink} from "../helpers/activeLink";

const Sidebar = () => {
    const params = useParams();
    const {type} = params

    return (
        <div className="mt-8">
            <div>
                <Link to="/" className="text-white text-2xl md:text-4xl">
                    Everwell
                </Link>
            </div>
            <div className="text-white flex flex-col items-center gap-y-10 mt-20">
                {Object.entries(assets.apps).map(([key, app]) => (
                    <Link key={key} to={`/category/${key}`} className={`${activeLink(key, type) ? 'border-b-2' : '' }`}>
            {app.title}
        </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
