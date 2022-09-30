import { Component } from '@angular/core';

const config = {
  selector: 'cookbook-data-table-card-example',
  template: `<kirby-card>
  <table kirbyTable>
    <thead kirbyThead>
      <tr kirbyTr>
        <th>Hello there,</th>
        <th>Han shot</th>
        <th></th>
      </tr>
    </thead>
    <tbody kirbyTbody>
      <tr kirbyTr>
        <td>General Kenobi</td>
        <td>First</td>
        <td>
          <button kirby-button attentionLevel="4">
            <kirby-icon name="life">
            </kirby-icon>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</kirby-card>
  `,
};

@Component({
  selector: config.selector,
  template: config.template,
})
export class DataTableCardExampleComponent {
  template: string = config.template;
}
