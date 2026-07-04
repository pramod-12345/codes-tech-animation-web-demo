import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import ServiceDetailHeader from "../../components/sections/ServiceDetail/ServiceDetailHeader";
import Challenge from "../../components/sections/ServiceDetail/Challenge";
import OurApproach, { LightbulbIcon, ArchitectureIcon, IterationIcon, TeamIcon, ShieldCheckIcon } from "../../components/sections/ServiceDetail/OurApproach";
import headerImg from "../../assets/services/debd-header.jpg";
import challengeImg1 from "../../assets/services/debd-challenge1.jpg";
import challengeImg2 from "../../assets/services/debd-challenge2.jpg";
import {
  Dbt,
  Spark,
  Kafka,
  ApacheAirflow,
  Perfect,
  MonteCarlo,
  DataBricks,
  SnowFlake,
  BigQuery,
  RedShift,
  DeltaLake,
  IceBerg,
  GreatExpectations
} from "../../assets/icons/index"
import TechStack from "../../components/sections/ServiceDetail/TechStack";

const approachSteps = [
  {
    number: "01",
    icon: LightbulbIcon,
    title: "Data Architecture Design",
    description: "Lake, warehouse, lakehouse, or streaming, we design the architecture that matches your access patterns and analytical requirements.",
  },
  {
    number: "02",
    icon: ArchitectureIcon,
    title: "ELT/ETL Pipeline Engineering",
    description: "Robust, monitored data pipelines with schema validation, lineage tracking, and failure alerting.",
  },
  {
    number: "03",
    icon: IterationIcon,
    title: "Real-Time Streaming",
    description: "Apache Kafka, Apache Flink, and Spark Streaming for organizations that need data in seconds, not hours.",
  },
  {
    number: "04",
    icon: TeamIcon,
    title: "Data Quality Engineering",
    description: "Automated data quality checks, anomaly detection in data streams, and data reconciliation systems.",
  },
  {
    number: "05",
    icon: ShieldCheckIcon,
    title: "Data Governance Framework",
    description: "Ownership, access control, cataloging, and lineage documentation for regulated environments.",
  },
];

const DataEngineering = () => {
  return (
    <PageLayout>
      <ServiceDetailHeader
        headerImg={headerImg}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: "Data Engineering & Big Data", active: true },
        ]}
        title="Data Pipelines That Actually Reach Their Destination"
        description="We build the data infrastructure that transforms raw, scattered organizational data into clean, reliable, accessible assets that power analytics, AI, and business decisions."
      />
      <Challenge
        title="The Challenge"
        images={[challengeImg1, challengeImg2]}
        description="The promise of being a 'data-driven organization' breaks down when data is siloed in operational systems, inconsistently formatted, and unavailable to the people and tools that need it. Most companies are not short of data. They are short of usable data."
      />
      <OurApproach mainText="Our" italicText="Approach" steps={approachSteps} />
      <TechStack
        mainText="Technology"
        italicText="Stack"
        subtitleText="We work with modern, battle-tested technologies to build scalable products."
        iconGroups={[
          {
            title: "Tools",
            icons: [
              [Dbt, Spark, Kafka, ApacheAirflow, Perfect, MonteCarlo, DataBricks],
              [SnowFlake, BigQuery, RedShift, DeltaLake, IceBerg, GreatExpectations]
            ]
          }
        ]}
        alignIconClass="md:justify-center lg:justify-between"
      />
    </PageLayout>
  );
};

export default DataEngineering;
