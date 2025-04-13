import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-profile',
  imports:[MatCardModule,MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = {
    name: 'Teszt Elek',
    email: 'teszt@pelda.hu',
    address: '1234 Budapest, Fő utca 1.',
    phone: '+36 30 123 4567',
    profileImageUrl: 'images/profile.jpg' // Profilkép a "src/assets/images" mappában
  };

  editProfile() {
    alert('A profil szerkesztése még nincs implementálva.');
  }
}
