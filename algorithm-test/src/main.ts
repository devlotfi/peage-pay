class GraphToll {
  public constructor(toll: any) {
    this.id = toll.id;
    this.name = toll.name;
    this.status = toll.status;
    this.latitude = toll.latitude;
    this.longitude = toll.longitude;
    this.wilayaId = toll.wilayaId;
    this.highwayId = toll.highwayId;
    this.tollNetworkId = toll.tollNetworkId;
    this.createdAt = toll.createdAt;
    this.updatedAt = toll.updatedAt;
  }

  public id: string;
  public name: string;
  public status: any;
  public latitude: number;
  public longitude: number;
  public wilayaId: string;
  public highwayId: string;
  public tollNetworkId: string;
  public createdAt: Date;
  public updatedAt: Date;

  public connectedSections: GraphSection[] = [];
}

class GraphSection {
  public constructor(
    section: any,
    fromGraphToll: GraphToll,
    toGraphToll: GraphToll
  ) {
    this.fromTollId = section.fromTollId;
    this.toTollId = section.toTollId;
    this.distance = section.distance;
    this.status = section.status;

    this.fromGraphToll = fromGraphToll;
    this.toGraphToll = toGraphToll;
  }

  public fromTollId: string;
  public toTollId: string;
  public distance: number;
  public status: any;

  public fromGraphToll: GraphToll;
  public toGraphToll: GraphToll;
}

class GraphTollDistance {
  public constructor(
    fromGraphToll: GraphToll,
    toGraphToll: GraphToll,
    distance: number
  ) {
    this.fromGraphToll = fromGraphToll;
    this.toGraphToll = toGraphToll;
    this.distance = distance;
  }

  public fromGraphToll: GraphToll;
  public toGraphToll: GraphToll;
  public distance: number;
}

async function generateTollDistances(): Promise<boolean> {
  const tolls = [
    {
      id: "881d9903-91bc-4e30-a20f-a15f0e748c73",
      wilayaId: "69bd2260-00ed-47a7-8e78-9b5a1faa1a61",
      tollNetworkId: "3f05e7b8-a5ab-4efc-8ff6-265465090aaa",
      highwayId: "7cc03430-8b78-4e1c-b6c2-77e699b43a1d",
      name: "Bouira",
      status: "OUT_OF_SERVICE",
      longitude: 3.938152856056352,
      latitude: 36.33293066034896,
    },
    {
      id: "41ec7023-09b2-4274-b1ce-1284557cd434",
      wilayaId: "69bd2260-00ed-47a7-8e78-9b5a1faa1a62",
      tollNetworkId: "3f05e7b8-a5ab-4efc-8ff6-265465090aaa",
      highwayId: "991c8089-ed2d-4a7b-9918-2544aafb3e5c",
      name: "Alger",
      status: "NORMAL_TRAFFIC",
      longitude: 3.349993107215021,
      latitude: 36.65098346402815,
    },
    {
      id: "c681a8fb-6dac-435d-afab-57f5c8d758a5",
      wilayaId: "69bd2260-00ed-47a7-8e78-9b5a1faa1a63",
      tollNetworkId: "3f05e7b8-a5ab-4efc-8ff6-265465090aaa",
      highwayId: "4171965a-b663-4107-ba04-caa666567bb7",
      name: "Toll 1",
      status: "OUT_OF_SERVICE",
      longitude: 5.407771190581165,
      latitude: 36.20313158461936,
    },
  ];
  const sections = [
    {
      fromTollId: "41ec7023-09b2-4274-b1ce-1284557cd434",
      toTollId: "881d9903-91bc-4e30-a20f-a15f0e748c73",
      status: "NORMAL_TRAFFIC",
      distance: 30,
    },
    {
      fromTollId: "c681a8fb-6dac-435d-afab-57f5c8d758a5",
      toTollId: "881d9903-91bc-4e30-a20f-a15f0e748c73",
      status: "MODERATE_TRAFFIC",
      distance: 70,
    },
  ];
  const graphTolls = new Map<string, GraphToll>();
  for (const toll of tolls) {
    const graphToll = new GraphToll(toll);
    graphTolls.set(toll.id, graphToll);
  }

  const graphSections: GraphSection[] = sections.map((section) => {
    const fromGraphToll = graphTolls.get(section.fromTollId);
    const toGraphToll = graphTolls.get(section.toTollId);
    if (!fromGraphToll || !toGraphToll) {
      throw new Error();
    }
    const graphSection = new GraphSection(section, fromGraphToll, toGraphToll);
    return graphSection;
  });

  for (const [, graphToll] of graphTolls) {
    const connectedSections = graphSections.filter(
      (graphSection) =>
        graphSection.fromGraphToll === graphToll ||
        graphSection.toGraphToll === graphToll
    );
    graphToll.connectedSections = connectedSections;
  }

  async function traverseFromNode(
    referenceNode: GraphToll,
    currentNode: GraphToll,
    savedSectionsSet: Set<GraphSection>,
    graphTollDistancesMap: Map<string, GraphTollDistance>,
    currentDistance: number = 0
  ) {
    for (const section of currentNode.connectedSections) {
      const savedSection = savedSectionsSet.has(section);
      if (!savedSection) {
        savedSectionsSet.add(section);

        const nextNode =
          section.fromGraphToll !== currentNode
            ? section.fromGraphToll
            : section.toGraphToll;

        const existingGraphTollDistance =
          graphTollDistancesMap.get(`${referenceNode.id}||${nextNode.id}`) ||
          graphTollDistancesMap.get(`${nextNode.id}||${referenceNode.id}`);
        console.log(
          new GraphTollDistance(
            referenceNode,
            nextNode,
            currentDistance + section.distance
          )
        );
        if (!existingGraphTollDistance) {
          graphTollDistancesMap.set(
            `${referenceNode.id}||${nextNode.id}`,
            new GraphTollDistance(
              referenceNode,
              nextNode,
              currentDistance + section.distance
            )
          );
        }

        traverseFromNode(
          referenceNode,
          nextNode,
          savedSectionsSet,
          graphTollDistancesMap,
          currentDistance + section.distance
        );
      }
    }
  }

  let index = 0;
  const graphTollDistancesMap = new Map<string, GraphTollDistance>();
  for (const [, graphToll] of graphTolls) {
    console.log("testa");
    const savedSections = new Set<GraphSection>();
    traverseFromNode(
      graphToll,
      graphToll,
      savedSections,
      graphTollDistancesMap
    );

    index++;
  }

  console.log(graphTollDistancesMap);

  return true;
}

generateTollDistances();
