class PointEntity {
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public id: string;
  public name: string;
}

class PointLinkEntity {
  constructor(point1Id: string, point2Id: string, distance: number) {
    this.point1Id = point1Id;
    this.point2Id = point2Id;
    this.distance = distance;
  }

  public point1Id: string;
  public point2Id: string;
  public distance: number;
}

class PointLinkReference {
  constructor(
    point1Id: string,
    point2Id: string,
    referencePointId: string,
    distance: number
  ) {
    this.point1Id = point1Id;
    this.point2Id = point2Id;
    this.referencePointId = referencePointId;
    this.distance = distance;
  }

  public point1Id: string;
  public point2Id: string;
  public referencePointId: string;
  public distance: number;
}

class Point {
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
    this.nextConnections = [];
  }

  public name: string;
  public id: string;
  public nextConnections: Distance[];

  public addConnectionIfIdNotExist(distance: Distance) {
    if (!this.nextConnections.find((p) => p.point.id === distance.point.id)) {
      this.nextConnections.push(distance);
    }
  }

  public static createFromPointEntity(pointEntity: PointEntity) {
    const point = new Point(pointEntity.id, pointEntity.name);
    return point;
  }
}

class Distance {
  constructor(value: number, point: Point) {
    this.value = value;
    this.point = point;
  }

  public value: number;
  public point: Point;
}

const pointEntities: PointEntity[] = [
  new PointEntity("1", "alger"),
  new PointEntity("2", "meliana"),
  new PointEntity("3", "medea"),
  new PointEntity("4", "chlef"),
  new PointEntity("5", "oran"),
  new PointEntity("6", "djelfa"),
  new PointEntity("7", "blida"),
];
const pointLinkEntities: PointLinkEntity[] = [
  new PointLinkEntity("1", "2", 100),
  new PointLinkEntity("2", "3", 50),
  new PointLinkEntity("2", "4", 150),
  new PointLinkEntity("4", "5", 250),
  new PointLinkEntity("3", "6", 220),
  new PointLinkEntity("3", "7", 70),
];

const points: Point[] = [];

for (const pointEntity of pointEntities) {
  points.push(Point.createFromPointEntity(pointEntity));
}

for (const pointLinkEntity of pointLinkEntities) {
  const point1 = points.find((point) => point.id === pointLinkEntity.point1Id);
  const point2 = points.find((point) => point.id === pointLinkEntity.point2Id);
  if (!point1 || !point2) {
    throw new Error("error");
  }

  point1.addConnectionIfIdNotExist(
    new Distance(pointLinkEntity.distance, point2)
  );
  point2.addConnectionIfIdNotExist(
    new Distance(pointLinkEntity.distance, point1)
  );
}

function calculateAllLinksForPoint(
  referencePoint: Point,
  currentPoint: Point,
  currentDistance: number,
  allLinks: PointLinkReference[]
) {
  for (const nextConnection of currentPoint.nextConnections) {
    const existingPointLinkEntity = allLinks.find(
      (pointLinkEntity) =>
        (pointLinkEntity.point1Id === nextConnection.point.id &&
          pointLinkEntity.point2Id === currentPoint.id) ||
        (pointLinkEntity.point2Id === nextConnection.point.id &&
          pointLinkEntity.point1Id === currentPoint.id)
    );
    if (!existingPointLinkEntity) {
      allLinks.push(
        new PointLinkReference(
          currentPoint.id,
          nextConnection.point.id,
          referencePoint.id,
          currentDistance + nextConnection.value
        )
      );
      calculateAllLinksForPoint(
        referencePoint,
        nextConnection.point,
        currentDistance + nextConnection.value,
        allLinks
      );
    }
  }
}

console.log(points);

const allLinks: PointLinkReference[] = [];

calculateAllLinksForPoint(points[0], points[0], 0, allLinks);

console.log(allLinks);
