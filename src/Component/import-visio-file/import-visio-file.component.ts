import { Component, OnInit } from '@angular/core';
import { dia } from '@clientio/rappid';
import { VisioArchive, } from '@clientio/rappid-visio';

@Component({
  selector: 'app-import-visio-file',
  templateUrl: './import-visio-file.component.html',
  styleUrls: ['./import-visio-file.component.scss']
})
export class ImportVisioFileComponent implements OnInit {
  constructor() { }

  async ngOnInit(): Promise<void> {

    var VisioFileUrl = './assets/Sequence Diagram.vsdx';
    var cells: any;
    var paper: any;
    var page: any;

    const { document: vsdDocument } = await VisioArchive.fromURL(VisioFileUrl);
    const pagecount = vsdDocument.getPages();

    for (var i = 0; i < pagecount.length; i++) {

      var div = document.getElementById("graph");
      var elem = <HTMLDivElement>(document.createElement('div'));
      elem.setAttribute("id", "paper" + i);
      div?.appendChild(elem);

      page = vsdDocument.getPages()[i];
      const pageContent = await page.getContent();

      var graph = new dia.Graph();

      paper = new dia.Paper({
        el: document.getElementById('paper' + [i])!,
        model: graph,
        interactive: false,
        sorting: dia.Paper.sorting.APPROX,
        async: true,
        frozen: true
      });

      cells = pageContent.toGraphCells();

      graph.addCells(cells);

      paper.unfreeze();

      paper.setDimensions(page.width, page.height);
    }

  }

}
