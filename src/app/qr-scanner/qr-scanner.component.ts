import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserQRCodeReader } from '@zxing/library';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.css']
})
export class QrScannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement')
  videoElement!: ElementRef;
  qrCodeReader = new BrowserQRCodeReader();

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.setupCamera();
  }

  ngOnDestroy(): void {
    this.qrCodeReader.reset();
  }

  setupCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      })
      .catch(err => console.error("Error accessing camera:", err));
  }

  startScan(): void {
    this.qrCodeReader.decodeOnceFromVideoDevice(undefined, this.videoElement.nativeElement)
      .then(result => alert(`QR Code scanned: ${result}`))
      .catch(err => console.error("Error scanning QR code:", err));

      this.router.navigate(['/mainpage']);     
  }
  
}
