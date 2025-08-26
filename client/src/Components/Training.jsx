import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Search as SearchIcon } from "lucide-react";

export default function TrainingandCertification() {
  const [active, setActive] = useState("training");
  const tabRefs = useRef([]);

  // ================= Keyboard navigation =================
  const focusTab = (i) => tabRefs.current[i]?.focus();

  const onKeyDown = (e, i) => {
    const tabs = ["training", "cert"];
    const last = tabs.length - 1;
    let next = i;

    if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;

    if (next !== i) {
      e.preventDefault();
      setActive(tabs[next]);
      requestAnimationFrame(() => focusTab(next));
    }
  };

  const tabs = [
    {
      id: "training",
      label: "Training Programs",
      content: (
        <>
          {/* Filters + Search */}
          <div className="px-6">
            <FilterBar />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10">
            {[
              {
                id: 1,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image2.png",
              },
              {
                id: 2,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image 10 (3).png",
              },
              {
                id: 3,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image 10 (4).png",
              },


                            {
                id: 4,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image2.png",
              },


                            {
                id: 5,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image2.png",
              },


                            {
                id: 6,
                title: "Machine Repairing",
                desc: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut aliquip ex commodo.",
                img: "/WebsiteImages/image2.png",
              },



            ].map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition max-w-[400px] mb-10 mx-auto"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{card.desc}</p>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#8DC63E] text-white rounded-full hover:bg-[#77a92f] transition">
                    See More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "cert",
      label: "Certification Tracking",
      content: (
        <div className="px-6 py-10 text-gray-600">
          Certification tracking content…
        </div>
      ),
    },
  ];

  return (
    <div className="w-full  pt-36">
      {/* ================= Banner Section ================= */}
      <div className="relative w-full h-[300px]">
        <img
          src="/WebsiteImages/Rectangle 1390.png"
          alt="Training Certificate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-5xl font-bold relative -top-[20px]">
            Our <span className="text-[#8DC63E]">Training & Certifications</span>
          </h1>
          <p className="mt-4 text-lg w-full md:w-3/4 lg:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Link to="/training" className="px-4 py-2 text-white rounded font-bold">
              Home &gt; <span className="text-[#8DC63E]">Training & Certifications</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= Pill Tabs ================= */}
      <div className="mt-10 w-full px-6">
        <div
          role="tablist"
          aria-label="Learning navigation"
          className="flex items-center gap-3 border-b border-lime-300"
        >
          {tabs.map((t, i) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                role="tab"
                ref={(el) => (tabRefs.current[i] = el)}
                aria-selected={isActive}
                aria-controls={`panel-${t.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={[
                  "-mb-px rounded-md px-3 py-1.5 text-sm font-semibold transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#72a93a] focus-visible:ring-offset-2",
                  isActive
                    ? "bg-lime-100 text-lime-700"
                    : "text-gray-400 hover:text-gray-600",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
          <div className="flex-1" />
        </div>

        {/* Tabs Content */}
        <div className="py-4 text-sm text-gray-700">
          {tabs.map((t) => (
            <section
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              hidden={t.id !== active}
            >
              {t.id === active ? t.content : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ Small UI Pieces ============ */

function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-8">
      {/* Filters */}
      <SelectPill placeholder="Filter 1" />
      <SelectPill placeholder="Filter 2" />
      <SelectPill placeholder="Filter 3" />

      {/* Search */}
      <div className="w-full md:w-auto">
        <SearchPill />
      </div>
    </div>
  );
}

function SelectPill({ placeholder = "Select Here Filter" }) {
  return (
    <div className="relative">
      <label className="sr-only">Filter</label>
      <select
        defaultValue=""
        className="appearance-none bg-gray-200 text-gray-500 placeholder-gray-400
                   h-11 min-w-[220px] rounded-full pl-4 pr-10
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <ChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}

function SearchPill() {
  return (
    <div className="relative w-[400px]">   {/* 👈 මෙතන w-[400px] දාලා custom width */}
      <label className="sr-only">Search</label>
      <input
        type="text"
        placeholder="Search your thinks"
        className="bg-gray-200 h-11 w-full rounded-full pl-5 pr-16 text-gray-700
                   placeholder:text-gray-400
                   focus:outline-none focus:ring-2 focus:ring-lime-500 mr-5"
      />
      <button
        type="button"
        aria-label="Search"
        className="absolute right-1 top-1/2 -translate-y-1/2
                   w-10 h-10 rounded-full bg-lime-500 text-white
                   grid place-items-center shadow
                   hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        <SearchIcon size={18} />
      </button>
    </div>
  );
}
