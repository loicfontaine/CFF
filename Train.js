class Train {
  constructor(trainData) {
    this.category = trainData["category"];
    this.departed = new Date(trainData["stop"]["departure"]);
    this.departedHours = this.departed.getHours();
    this.departedMinutes = this.departed.getMinutes();
    this.terminus = trainData["to"];
    return this;
  }

  display(contener) {
    if (this.departedHours < 10) {
      this.departedHours = `0${this.departedHours}`;
    }
    if (this.departedMinutes < 10) {
      this.departedMinutes = `0${this.departedMinutes}`;
    }

    const html = ` <article>
<div class="time">${this.departedHours}:${this.departedMinutes}</div>
<div class="category" data-category="${this.category}">${this.category}</div>
<div class="destination">${this.terminus}</div>
</article>`;

    contener.insertAdjacentHTML("beforebegin", html);
  }
}

export default Train;
