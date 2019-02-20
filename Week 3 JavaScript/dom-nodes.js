(function() {

    function incrementCounter() {
        counter = counter + 1;
    }

    function updateUI() {

        const colors = [
            { name: 'Alizarin', value: '#e74c3c' },
            { name: 'Belize Hole', value: '#2980b9' },
            { name: 'Emerald', value: '#2ecc71' },
            { name: 'Midnight Blue', value: '#2c3e50' },
            { name: 'Sun Flower', value: '#f1c40f' },
            { name: 'Pumpkin', value: '#d35400' },
        ];

        let result = document.getElementById('resultDiv');

        // Relative to the font-size of the element 
        // (2em means 2 times the size of the current font)
        result.innerText = counter;
        if (counter > 0) {
            result.style.fontSize = counter + 'em';
        }

        // Divide first into second, return the remainder.
        // Access that element of the colors array to grab
        // the color object:
        let remainder = counter % colors.length;
        result.style.color = colors[remainder].value;

        // Clear out all existing child color divs
        let colorDiv = document.getElementById('colorDiv');
        colorDiv.innerHTML = '';

        // Re-add the child color divs
        for (i = 0; i < colors.length; i++) {

            // Creating a node dynamically with the intent of 
            // adding it to the colorDiv.
            var node = document.createElement('div');
            var textnode = document.createTextNode(colors[i].name);
            node.appendChild(textnode);
            node.style.backgroundColor = colors[i].value;

            // Alternatively, I could have made this into a CSS
            // style and added that to the node.classList ...            
            node.style.width = '150px';
            node.style.height = '50px';
            node.style.cssFloat = 'left';
            node.style.paddingLeft = '10px';
            node.style.paddingTop = '10px';

            if (i == remainder) {
                node.style.height = '45px';

                // Example of adding a class to the node's
                // classList.
                node.classList.add('selected');
            }

            colorDiv.appendChild(node);
        }
    }

    function handleClick() {
        incrementCounter();
        updateUI();
    }

    let counter = 0;

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        incrementCounter();
        updateUI();
    });

    updateUI();

})();
// SIG // Begin signature block
// SIG // MIIdkgYJKoZIhvcNAQcCoIIdgzCCHX8CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFGQO0SlXCXnm
// SIG // dtrFXVpgD0puAdvroIIYVDCCBMIwggOqoAMCAQICEzMA
// SIG // AADEbnbQTT3+qWUAAAAAAMQwDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE2MDkwNzE3
// SIG // NTg1MloXDTE4MDkwNzE3NTg1MlowgbIxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDDAKBgNVBAsTA0FPQzEnMCUGA1UECxMe
// SIG // bkNpcGhlciBEU0UgRVNOOjIxMzctMzdBMC00QUFBMSUw
// SIG // IwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2
// SIG // aWNlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAqAOaxVKZdoyjPfy9uhrlY+gXqPO2HT08Lji9AvkD
// SIG // m7a2L4oeywzQwHli8PsGJUpAJn5mklxaYkRzNXQc6vlX
// SIG // LhfGBpmZvyyliAAd1U4+nX9OSR/JILaeIDdpsj00fq5M
// SIG // KDKEN5rke829Z7zYi7BKYCdhLsF+TP+9bmKyugxwD22w
// SIG // 968hYs2QH6mHBlFrg4RBOmVfqJ3sVLpWegyuiKC47UL1
// SIG // Gx9WTBFrzVU5Yj2DoDWC0yHCeZmKYZ1DAAaCnbxg3FaU
// SIG // php+rCyhoIhQvNp7p/Ye5KI+/maUhxJbC8IVkIhlVgkV
// SIG // ZPGTG3nPqobvv/R8M3VSWG+Bzm5sDQ2qqantewIDAQAB
// SIG // o4IBCTCCAQUwHQYDVR0OBBYEFIgFI+sRvRCO+4uWphUm
// SIG // a179Vd5QMB8GA1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuz
// SIG // K7DDNbMPMFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L01pY3Jvc29mdFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYB
// SIG // BQUHAQEETDBKMEgGCCsGAQUFBzAChjxodHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29m
// SIG // dFRpbWVTdGFtcFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYB
// SIG // BQUHAwgwDQYJKoZIhvcNAQEFBQADggEBAHA4fpI5l7wp
// SIG // 6BDuQHFFn6eP+H1gqogUC/LlBaunLgbmKfDC+FMh0iyj
// SIG // TzqCZs88tTk9xhRmK5qa4DunNndbc7kmjdx3hRhDVw25
// SIG // +zdkQbybUpdFJGoUsmpOE7EVD5P1sDENBjhjW8Y6Jazk
// SIG // eNS1bEph1Z5/CFgzglgY9XPtY5D5MxudYwogJ1sx1NUN
// SIG // uQP9Lca4S2IzbSOD939E9L7+uV+62QCM93nEEvxIJZgA
// SIG // 30JP86y4CqiXcWSst7V0u/t+cyKw3oHQB9hu3d47wjU4
// SIG // 2ra1e3MSh/mV/aBLBZddLof1PNygNkIkCUDLW4xks0Fd
// SIG // sUaXDX9hqRwUT1tLCuMi98MwggYBMIID6aADAgECAhMz
// SIG // AAAAxOmJ+HqBUOn/AAAAAADEMA0GCSqGSIb3DQEBCwUA
// SIG // MH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xKDAmBgNVBAMTH01p
// SIG // Y3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBIDIwMTEwHhcN
// SIG // MTcwODExMjAyMDI0WhcNMTgwODExMjAyMDI0WjB0MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMR4wHAYDVQQDExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24wggEiMA0GCSqGSIb3DQEBAQUA
// SIG // A4IBDwAwggEKAoIBAQCIirgkwwePmoB5FfwmYPxyiCz6
// SIG // 9KOXiJZGt6PLX4kvOjMuHpF4+nypH4IBtXrLGrwDykbr
// SIG // xZn3+wQd8oUK/yJuofJnPcUnGOUoH/UElEFj7OO6FYzt
// SIG // E5o13jhwVG877K1FCTBJwb6PMJkMy3bJ93OVFnfRi7uU
// SIG // xwiFIO0eqDXxccLgdABLitLckevWeP6N+q1giD29uR+u
// SIG // Ype/xYSxkK7WryvTVPs12s1xkuYe/+xxa8t/CHZ04BBR
// SIG // SNTxAMhITKMHNeVZDf18nMjmWuOF9daaDx+OpuSEF8HW
// SIG // yp8dAcf9SKcTkjOXIUgy+MIkogCyvlPKg24pW4HvOG6A
// SIG // 87vsEwvrAgMBAAGjggGAMIIBfDAfBgNVHSUEGDAWBgor
// SIG // BgEEAYI3TAgBBggrBgEFBQcDAzAdBgNVHQ4EFgQUy9Zi
// SIG // hM9gOer/Z8Jc0si7q7fDE5gwUgYDVR0RBEswSaRHMEUx
// SIG // DTALBgNVBAsTBE1PUFIxNDAyBgNVBAUTKzIzMDAxMitj
// SIG // ODA0YjVlYS00OWI0LTQyMzgtODM2Mi1kODUxZmEyMjU0
// SIG // ZmMwHwYDVR0jBBgwFoAUSG5k5VAF04KqFzc3IrVtqMp1
// SIG // ApUwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWljQ29kU2ln
// SIG // UENBMjAxMV8yMDExLTA3LTA4LmNybDBhBggrBgEFBQcB
// SIG // AQRVMFMwUQYIKwYBBQUHMAKGRWh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljQ29kU2ln
// SIG // UENBMjAxMV8yMDExLTA3LTA4LmNydDAMBgNVHRMBAf8E
// SIG // AjAAMA0GCSqGSIb3DQEBCwUAA4ICAQAGFh/bV8JQyCNP
// SIG // olF41+34/c291cDx+RtW7VPIaUcF1cTL7OL8mVuVXxE4
// SIG // KMAFRRPgmnmIvGar27vrAlUjtz0jeEFtrvjxAFqUmYoc
// SIG // zAmV0JocRDCppRbHukdb9Ss0i5+PWDfDThyvIsoQzdiC
// SIG // EKk18K4iyI8kpoGL3ycc5GYdiT4u/1cDTcFug6Ay67Sz
// SIG // L1BWXQaxFYzIHWO3cwzj1nomDyqWRacygz6WPldJdyOJ
// SIG // /rEQx4rlCBVRxStaMVs5apaopIhrlihv8cSu6r1FF8xi
// SIG // ToG1VBpHjpilbcBuJ8b4Jx/I7SCpC7HxzgualOJqnWmD
// SIG // oTbXbSD+hdX/w7iXNgn+PRTBmBSpwIbM74LBq1UkQxi1
// SIG // SIV4htD50p0/GdkUieeNn2gkiGg7qceATibnCCFMY/2c
// SIG // kxVNM7VWYE/XSrk4jv8u3bFfpENryXjPsbtrj4Nsh3Kq
// SIG // 6qX7n90a1jn8ZMltPgjlfIOxrbyjunvPllakeljLEkdi
// SIG // 0iHv/DzEMQv3Lz5kpTdvYFA/t0SQT6ALi75+WPbHZ4dh
// SIG // 256YxMiMy29H4cAulO2x9rAwbexqSajplnbIvQjE/jv1
// SIG // rnM3BrJWzxnUu/WUyocc8oBqAU+2G4Fzs9NbIj86WBjf
// SIG // iO5nxEmnL9wliz1e0Ow0RJEdvJEMdoI+78TYLaEEAo5I
// SIG // +e/dAs8DojCCBgcwggPvoAMCAQICCmEWaDQAAAAAABww
// SIG // DQYJKoZIhvcNAQEFBQAwXzETMBEGCgmSJomT8ixkARkW
// SIG // A2NvbTEZMBcGCgmSJomT8ixkARkWCW1pY3Jvc29mdDEt
// SIG // MCsGA1UEAxMkTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5MB4XDTA3MDQwMzEyNTMwOVoXDTIx
// SIG // MDQwMzEzMDMwOVowdzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEh
// SIG // MB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // n6Fssd/bSJIqfGsuGeG94uPFmVEjUK3O3RhOJA/u0afR
// SIG // TK10MCAR6wfVVJUVSZQbQpKumFwwJtoAa+h7veyJBw/3
// SIG // DgSY8InMH8szJIed8vRnHCz8e+eIHernTqOhwSNTyo36
// SIG // Rc8J0F6v0LBCBKL5pmyTZ9co3EZTsIbQ5ShGLieshk9V
// SIG // UgzkAyz7apCQMG6H81kwnfp+1pez6CGXfvjSE/MIt1Nt
// SIG // UrRFkJ9IAEpHZhEnKWaol+TTBoFKovmEpxFHFAmCn4Tt
// SIG // VXj+AZodUAiFABAwRu233iNGu8QtVJ+vHnhBMXfMm987
// SIG // g5OhYQK1HQ2x/PebsgHOIktU//kFw8IgCwIDAQABo4IB
// SIG // qzCCAacwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU
// SIG // IzT42VJGcArtQPt2+7MrsMM1sw8wCwYDVR0PBAQDAgGG
// SIG // MBAGCSsGAQQBgjcVAQQDAgEAMIGYBgNVHSMEgZAwgY2A
// SIG // FA6sgmBAVieX5SUT/CrhClOVWeSkoWOkYTBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHmCEHmtFqFKoKWt
// SIG // THNY9AcTLmUwUAYDVR0fBEkwRzBFoEOgQYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvbWljcm9zb2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUF
// SIG // BwEBBEgwRjBEBggrBgEFBQcwAoY4aHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRS
// SIG // b290Q2VydC5jcnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // DQYJKoZIhvcNAQEFBQADggIBABCXisNcA0Q23em0rXfb
// SIG // znlRTQGxLnRxW20ME6vOvnuPuC7UEqKMbWK4VwLLTiAT
// SIG // UJndekDiV7uvWJoc4R0Bhqy7ePKL0Ow7Ae7ivo8KBciN
// SIG // SOLwUxXdT6uS5OeNatWAweaU8gYvhQPpkSokInD79vzk
// SIG // eJkuDfcH4nC8GE6djmsKcpW4oTmcZy3FUQ7qYlw/FpiL
// SIG // ID/iBxoy+cwxSnYxPStyC8jqcD3/hQoT38IKYY7w17gX
// SIG // 606Lf8U1K16jv+u8fQtCe9RTciHuMMq7eGVcWwEXChQO
// SIG // 0toUmPU8uWZYsy0v5/mFhsxRVuidcJRsrDlM1PZ5v6oY
// SIG // emIp76KbKTQGdxpiyT0ebR+C8AvHLLvPQ7Pl+ex9teOk
// SIG // qHQ1uE7FcSMSJnYLPFKMcVpGQxS8s7OwTWfIn0L/gHkh
// SIG // gJ4VMGboQhJeGsieIiHQQ+kr6bv0SMws1NgygEwmKkgk
// SIG // X1rqVu+m3pmdyjpvvYEndAYR7nYhv5uCwSdUtrFqPYmh
// SIG // dmG0bqETpr+qR/ASb/2KMmyy/t9RyIwjyWa9nR2HEmQC
// SIG // PS2vWY+45CHltbDKY7R4VAXUQS5QrJSwpXirs6CWdRrZ
// SIG // kocTdSIvMqgIbqBbjCW/oO+EyiHW6x5PyZruSeD3AWVv
// SIG // iQt9yGnI5m7qp5fOMSn/DsVbXNhNG6HY+i+ePy5VFmvJ
// SIG // E6P9MIIHejCCBWKgAwIBAgIKYQ6Q0gAAAAAAAzANBgkq
// SIG // hkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEy
// SIG // MDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5IDIwMTEwHhcNMTEwNzA4MjA1OTA5
// SIG // WhcNMjYwNzA4MjEwOTA5WjB+MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBTaWdu
// SIG // aW5nIFBDQSAyMDExMIICIjANBgkqhkiG9w0BAQEFAAOC
// SIG // Ag8AMIICCgKCAgEAq/D6chAcLq3YbqqCEE00uvK2WCGf
// SIG // Qhsqa+laUKq4BjgaBEm6f8MMHt03a8YS2AvwOMKZBrDI
// SIG // OdUBFDFC04kNeWSHfpRgJGyvnkmc6Whe0t+bU7IKLMOv
// SIG // 2akrrnoJr9eWWcpgGgXpZnboMlImEi/nqwhQz7NEt13Y
// SIG // xC4Ddato88tt8zpcoRb0RrrgOGSsbmQ1eKagYw8t00CT
// SIG // +OPeBw3VXHmlSSnnDb6gE3e+lD3v++MrWhAfTVYoonpy
// SIG // 4BI6t0le2O3tQ5GD2Xuye4Yb2T6xjF3oiU+EGvKhL1nk
// SIG // kDstrjNYxbc+/jLTswM9sbKvkjh+0p2ALPVOVpEhNSXD
// SIG // OW5kf1O6nA+tGSOEy/S6A4aN91/w0FK/jJSHvMAhdCVf
// SIG // GCi2zCcoOCWYOUo2z3yxkq4cI6epZuxhH2rhKEmdX4ji
// SIG // JV3TIUs+UsS1Vz8kA/DRelsv1SPjcF0PUUZ3s/gA4bys
// SIG // AoJf28AVs70b1FVL5zmhD+kjSbwYuER8ReTBw3J64HLn
// SIG // JN+/RpnF78IcV9uDjexNSTCnq47f7Fufr/zdsGbiwZeB
// SIG // e+3W7UvnSSmnEyimp31ngOaKYnhfsi+E11ecXL93KCjx
// SIG // 7W3DKI8sj0A3T8HhhUSJxAlMxdSlQy90lfdu+HggWCwT
// SIG // XWCVmj5PM4TasIgX3p5O9JawvEagbJjS4NaIjAsCAwEA
// SIG // AaOCAe0wggHpMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1Ud
// SIG // DgQWBBRIbmTlUAXTgqoXNzcitW2oynUClTAZBgkrBgEE
// SIG // AYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYw
// SIG // DwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBRyLToC
// SIG // MZBDuRQFTuHqp8cx0SOJNDBaBgNVHR8EUzBRME+gTaBL
// SIG // hklodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2Ny
// SIG // bC9wcm9kdWN0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFf
// SIG // MDNfMjIuY3JsMF4GCCsGAQUFBwEBBFIwUDBOBggrBgEF
// SIG // BQcwAoZCaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
// SIG // aS9jZXJ0cy9NaWNSb29DZXJBdXQyMDExXzIwMTFfMDNf
// SIG // MjIuY3J0MIGfBgNVHSAEgZcwgZQwgZEGCSsGAQQBgjcu
// SIG // AzCBgzA/BggrBgEFBQcCARYzaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9kb2NzL3ByaW1hcnljcHMu
// SIG // aHRtMEAGCCsGAQUFBwICMDQeMiAdAEwAZQBnAGEAbABf
// SIG // AHAAbwBsAGkAYwB5AF8AcwB0AGEAdABlAG0AZQBuAHQA
// SIG // LiAdMA0GCSqGSIb3DQEBCwUAA4ICAQBn8oalmOBUeRou
// SIG // 09h0ZyKbC5YR4WOSmUKWfdJ5DJDBZV8uLD74w3LRbYP+
// SIG // vj/oCso7v0epo/Np22O/IjWll11lhJB9i0ZQVdgMknzS
// SIG // Gksc8zxCi1LQsP1r4z4HLimb5j0bpdS1HXeUOeLpZMlE
// SIG // PXh6I/MTfaaQdION9MsmAkYqwooQu6SpBQyb7Wj6aC6V
// SIG // oCo/KmtYSWMfCWluWpiW5IP0wI/zRive/DvQvTXvbiWu
// SIG // 5a8n7dDd8w6vmSiXmE0OPQvyCInWH8MyGOLwxS3OW560
// SIG // STkKxgrCxq2u5bLZ2xWIUUVYODJxJxp/sfQn+N4sOiBp
// SIG // mLJZiWhub6e3dMNABQamASooPoI/E01mC8CzTfXhj38c
// SIG // bxV9Rad25UAqZaPDXVJihsMdYzaXht/a8/jyFqGaJ+HN
// SIG // pZfQ7l1jQeNbB5yHPgZ3BtEGsXUfFL5hYbXw3MYbBL7f
// SIG // QccOKO7eZS/sl/ahXJbYANahRr1Z85elCUtIEJmAH9AA
// SIG // KcWxm6U/RXceNcbSoqKfenoi+kiVH6v7RyOA9Z74v2u3
// SIG // S5fi63V4GuzqN5l5GEv/1rMjaHXmr/r8i+sLgOppO6/8
// SIG // MO0ETI7f33VtY5E90Z1WTk+/gFcioXgRMiF670EKsT/7
// SIG // qMykXcGhiJtXcVZOSEXAQsmbdlsKgEhr/Xmfwb1tbWrJ
// SIG // UnMTDXpQzTGCBKowggSmAgEBMIGVMH4xCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKDAmBgNVBAMTH01pY3Jvc29mdCBDb2Rl
// SIG // IFNpZ25pbmcgUENBIDIwMTECEzMAAADE6Yn4eoFQ6f8A
// SIG // AAAAAMQwCQYFKw4DAhoFAKCBvjAZBgkqhkiG9w0BCQMx
// SIG // DAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4wDAYK
// SIG // KwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQUDCmfuHAd
// SIG // C4SLU4D5wfeJzkJKRlEwXgYKKwYBBAGCNwIBDDFQME6g
// SIG // JoAkAE0AaQBjAHIAbwBzAG8AZgB0ACAATABlAGEAcgBu
// SIG // AGkAbgBnoSSAImh0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9sZWFybmluZyAwDQYJKoZIhvcNAQEBBQAEggEAHsZY
// SIG // q6oc2vZAEGpsi3rC4QE8I1uqnhQ7fpifOXMaMpvxl7t7
// SIG // HtCC4kkwKJ9OZfqLeubRCV1ioKC/+CCH/daBjKQnoiw9
// SIG // yT2Qv2NX9UMhMfrVg5OqSpwWsVtAGMZnt2JKrC80blBf
// SIG // /0u8WcZCtnyBKmVElSPTZ1g3HSLprNVsl0wpGY6yxCd7
// SIG // VwSvQ02K2aMAWNwW0bdY35t/d0DRSEFnWxWkF8B1gjGp
// SIG // WmLT0WQepTYKcZoixL4WFRLAsrlAxQ9VVek43oqSKazh
// SIG // XJatKJga+KwHxkMsSrsJcW5qjUO0IHrAFyI1sv8LWOEW
// SIG // 9KSKcn1mERd0pUxshjll+s1Y2wC+aKGCAigwggIkBgkq
// SIG // hkiG9w0BCQYxggIVMIICEQIBATCBjjB3MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0ECEzMAAADEbnbQTT3+qWUAAAAAAMQw
// SIG // CQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG
// SIG // 9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MDMyNzAxMzcy
// SIG // N1owIwYJKoZIhvcNAQkEMRYEFPomcxVxDgw/Lqi+iR9I
// SIG // wFhmJdkRMA0GCSqGSIb3DQEBBQUABIIBAFJuFSJMyVFl
// SIG // ZmxPZqmtO6SjkYgdJ8fR4kgFp8xjvzSepGV5ggzObByn
// SIG // 9VjyXOC4J4L0Xnd46Do1YOw8HjCXykytkTDSIGLs7Bg9
// SIG // Dj3G+f+qSc0A3B/6RWKzh/2RL8J5RE6bON3CHZcGpGPj
// SIG // 83s4ysImbDmjU9pewTBcfTGvoGyPFvQe7+UxZ0ipsDID
// SIG // goMjeaVufZRucyz9ZeNPzmmsUFOlE6wA3HtqZW0zSq58
// SIG // ZCYijW124GmRdgffV2sGTcBjfYIjwe6Qsp2zq+unBvNf
// SIG // Vdnk/BFTYS2ftmmFWVg6H/2+v95cllwMn6e/7BEXmlIf
// SIG // vcDXwxCJqShcRLpLmzAsbxA=
// SIG // End signature blockm