import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { Key } from "react";

interface DataType {
  key: Key;
  name: string;
  age: number;
  address: string;
}

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Semester Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "autumn",
        },
        {
          text: "Summer",
          value: "summer",
        },
        {
          text: "Fall",
          value: "fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(filters);
  };

  return (
    <>
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
    </>
  );
};

export default AcademicSemester;
