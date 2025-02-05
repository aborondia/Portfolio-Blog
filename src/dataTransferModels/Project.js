export default class Project {
  constructor({
    objectId,
    title,
    description,
    github,
    live,
    imageSource,
    imageAlt,
    caption,
    displayProject,
  }) {
    this.id = objectId;
    this.title = title;
    this.description = description;
    this.github = github;
    this.live = live;
    this.imageSource = imageSource;
    this.imageAlt = imageAlt;
    this.caption = caption;
    this.displayProject = displayProject;
  }
}
