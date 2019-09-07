import { Component } from "@angular/core";
import { Discipline } from "./discipline";
import * as _ from "lodash";
import {Data} from "./data"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "middara-disciplines-ng";

  disciplinesBySchoolAndLevel = _(Data.disciplines)
      .groupBy(d => d.school)
      .mapValues(disciplines =>
        _(disciplines)
          .groupBy(d => d.level)
          .value()
      )
      .value();

  onClick(): void {
    // console.log(JSON.stringify(this.disciplinesBySchoolAndLevel));
  }
}
