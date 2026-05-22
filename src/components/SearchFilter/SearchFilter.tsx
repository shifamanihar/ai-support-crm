import "./SearchFilter.css";

import {
  FaSearch,
  FaFilter,
} from "react-icons/fa";


type Props = {

  search: string;

  setSearch: any;

  statusFilter: string;

  setStatusFilter: any;

  priorityFilter: string;

  setPriorityFilter: any;

};


const SearchFilter = ({

  search,

  setSearch,

  statusFilter,

  setStatusFilter,

  priorityFilter,

  setPriorityFilter,

}: Props) => {

  return (

    <div className="top-controls">

      {/* SEARCH BOX */}

      <div className="search-box-wrapper">

        <FaSearch className="search-icon" />


        <input

          type="text"

          placeholder="Search by subject or customer..."

          value={search}

          onChange={(e) =>

            setSearch(
              e.target.value
            )

          }

          className="search-input"

        />

      </div>


      {/* STATUS FILTER */}

      <div className="filter-wrapper">

        <FaFilter className="filter-icon" />


        <select

          value={statusFilter}

          onChange={(e) =>

            setStatusFilter(
              e.target.value
            )

          }

          className="filter-select"

        >

          <option value="All">

            Search By Status

          </option>

          <option value="Open">

            Open

          </option>

          <option value="Pending">

            Pending

          </option>

          <option value="Closed">

            Closed

          </option>

          <option value="Resolved">

            Resolved

          </option>

        </select>

      </div>


      {/* PRIORITY FILTER */}

      <div className="filter-wrapper">

        <FaFilter className="filter-icon" />


        <select

          value={priorityFilter}

          onChange={(e) =>

            setPriorityFilter(
              e.target.value
            )

          }

          className="filter-select"

        >

          <option value="All">

            Search By Priority

          </option>

          <option value="Low">

            Low

          </option>

          <option value="Medium">

            Medium

          </option>

          <option value="High">

            High

          </option>

        </select>

      </div>

    </div>

  );

};

export default SearchFilter;