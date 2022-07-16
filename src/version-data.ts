export interface VersionGroup {
    title: string;
    version: number;
    versions: Version[];
}
  
export interface Version {
    version: string;
    release: string;
}

// 1.8
export const v1_8: Version[] = [
    {version: "1.8", release: "September 2, 2014"},
    {version: "1.8.1", release: "November 24, 2014"},
    {version: "1.8.2", release: "February 19, 2015"},
    {version: "1.8.3", release: "February 20, 2015"},
    {version: "1.8.4", release: "April 17, 2015"},
    {version: "1.8.5", release: "May 22, 2015"},
    {version: "1.8.6", release: "May 25, 2015"},
    {version: "1.8.7", release: "June 5, 2015"},
    {version: "1.8.8", release: "July 28, 2015"},
    {version: "1.8.9", release: "December 9, 2015"},
];

// 1.9
export const v1_9: Version[] = [
    {version: "1.9", release: "February 29, 2016"},
    {version: "1.9.1", release: "March 9, 2016"},
    {version: "1.9.2", release: "March 30, 2016"},
    {version: "1.9.3", release: "April 7, 2016"},
    {version: "1.9.4", release: "May 10, 2016"}, 
];

// 1.10
export const v1_10: Version[] = [
    {version: "1.10", release: "June 8, 2016"},
    {version: "1.10.1", release: "June 22, 2016"},
    {version: "1.10.2", release: "June 23, 2016"}
];

// 1.11
export const v1_11: Version[] = [
    {version: "1.11", release: "November 14, 2016"},
    {version: "1.11.1", release: "December 20, 2016"},
    {version: "1.11.2", release: "December 21, 2016"}
];

// 1.12
export const v1_12: Version[] = [
    {version: "1.12", release: "June 7, 2017"},
    {version: "1.12.1", release: "August 3, 2017"},
    {version: "1.12.2", release: "September 18, 2017"}
];

// 1.13
export const v1_13: Version[] = [
    {version: "1.13", release: "July 18, 2018"},
    {version: "1.13.1", release: "August 22, 2018"},
    {version: "1.13.2", release: "October 22, 2018"}
];

// 1.14
export const v1_14: Version[] = [
    {version: "1.14", release: "April 23, 2019"},
    {version: "1.14.1", release: "May 13, 2019"},
    {version: "1.14.2", release: "May 27, 2019"},
    {version: "1.14.3", release: "June 24, 2019"},
    {version: "1.14.4", release: "	July 19, 2019"}
];

// 1.15
export const v1_15: Version[] = [
    {version: "1.15", release: "December 10, 2019"},
    {version: "1.15.1", release: "December 17, 2019"},
    {version: "1.15.2", release: "January 21, 2020"}
];

// 1.16
export const v1_16: Version[] = [
    {version: "1.16", release: "June 23, 2020"},
    {version: "1.16.1", release: "June 24, 2020"},
    {version: "1.16.2", release: "August 11, 2020"},
    {version: "1.16.3", release: "September 10, 2020"},
    {version: "1.16.4", release: "November 2, 2020"},
    {version: "1.16.5", release: "January 15, 2021"},
];

// 1.17
export const v1_17: Version[] = [
    {version: "1.17", release: "June 8, 2021"},
    {version: "1.17.1", release: "July 6, 2021"}
];

// 1.18
export const v1_18: Version[] = [
    {version: "1.18", release: "November 30, 2021"},
    {version: "1.18.1", release: "December 10, 2021"},
    {version: "1.18.2", release: "February 28, 2022"}
];

// 1.19
export const v1_19: Version[] = [
    {version: "1.19", release: "June 7, 2022"}
];

const MajorVersions: VersionGroup[] = [
    { title: "Bountiful Update", version: 1.8, versions: v1_8 },
    { title: "Combat Update", version: 1.9, versions: v1_9 },
    { title: "Frostburn Update", version: 1.10, versions: v1_10 },
    { title: "Exploration Update", version: 1.11, versions: v1_11 },
    { title: "World of Color Update", version: 1.12, versions: v1_12 },
    { title: "Aquatic Update", version: 1.13, versions: v1_13 },
    { title: "Village & Pillage Update", version: 1.14, versions: v1_14 },
    { title: "Buzzy Bees Update", version: 1.15, versions: v1_15 },
    { title: "Nether Update", version: 1.16, versions: v1_16 },
    { title: "Caves & Cliffs: Part I", version: 1.17, versions: v1_17 },
    { title: "Caves & Cliffs: Part II", version: 1.18, versions: v1_18 },
    { title: "The Wild Update", version: 1.19, versions: v1_19 },
]

export default MajorVersions;