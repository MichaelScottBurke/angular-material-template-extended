import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

//AM components
import { 
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule, 
  MatTreeModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { ThemeColorTestComponent } from './components/theme-color-test/theme-color-test.component';
import { ColorPalettesComponent } from './components/color-palettes/color-palettes.component';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { ComponentsAllComponent } from './components/components-all/components-all.component';
import { DataTableStickyComponent } from './components/data-table-sticky/data-table-sticky.component';
import { MaterialTableHtmlComponent } from './components/material-table-html/material-table-html.component';
import { TypographyCategoriesComponent } from './components/typography-categories/typography-categories.component';
import { StepperExampleComponent } from './components/stepper-example/stepper-example.component';
import { ButtonsExampleComponent } from './components/buttons-example/buttons-example.component';

@NgModule({
  imports:      [  
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule, 
    MatTreeModule
  ],
  declarations: [ 
    AppComponent, 
    ThemeColorTestComponent, 
    ColorPalettesComponent, 
    BasicLayoutComponent, 
    ComponentsAllComponent, DataTableStickyComponent, MaterialTableHtmlComponent, TypographyCategoriesComponent, StepperExampleComponent, ButtonsExampleComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
