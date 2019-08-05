import { NgModule } from '@angular/core';
import { 
    NbThemeModule, 
    NbLayoutModule, 
    NbSidebarModule, 
    NbButtonModule, 
    NbInputModule, 
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbContextMenuModule,
    NbMenuModule,
    NbUserModule
} from '@nebular/theme';

@NgModule({
    imports: [
        NbThemeModule.forRoot(),
        NbLayoutModule,
        NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbActionsModule,
        NbIconModule,
        NbMenuModule.forRoot(),
        NbContextMenuModule,
        NbUserModule
    ],
    exports: [
        NbThemeModule,
        NbLayoutModule,
        NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbInputModule,
        NbCardModule,
        NbActionsModule,
        NbIconModule,
        NbMenuModule,
        NbContextMenuModule,
        NbUserModule
    ]
})
export class NebularModule {}