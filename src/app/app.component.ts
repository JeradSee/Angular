import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkyAlertModule } from '@skyux/indicators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkyAlertModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app test';
  @Input()
  public days = 9;

  protected onClosedChange(event: boolean): void {
    alert(`Alert closed with: ${event}`);
  }
}