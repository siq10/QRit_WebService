
#!/bin/bash
#######################################################################################################
#If you get a Syntax error: "(" unexpected it means that /bin/sh is pointing to dash instead of bash, #
# do the following:                                                                                   #
# ls -l /bin/sh                                                                                       #
# sudo mv /bin/sh /bin/sh.back                                                                        #
# ls -l /bin/sh.back                                                                                  #
# sudo ln -s /bin/bash /bin/sh                                                                        #
# ls -l /bin/sh                                                                                       #
#######################################################################################################
#
# set values for certificate DNs
# note: CN is set to different values in the sections below
ORG="000_QRit_Certificates"

# set values that the commands will share
VALID_DAYS=360
CA_KEY=ca.key
CA_CERT=ca.crt
CLIENT_KEY=client.key
CLIENT_CERT=client.crt
CLIENT_CSR=client.csr
CLIENT_P12=client.p12
SERVER_KEY=server.key
SERVER_CERT=server.crt
SERVER_CSR=server.csr
KEY_BITS=2048
FINGERPRINT=sha512
CA_CERT_PEM=ca.pem
echo
echo "Create CA certificate..."
CN="Test CA"
C="RO"
ST="Iasi"
L="Iasi"
OU="Developpment"
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:$KEY_BITS -out $CA_KEY
openssl req -new -x509 -$FINGERPRINT -days $VALID_DAYS -key $CA_KEY -subj "/CN=$CN/O=$ORG/OU=$OU" -out $CA_CERT
openssl x509 -in $CA_CERT  -out $CA_CERT_PEM -outform PEM
#sleep 5s
echo "Done."
echo
echo "Creating Server certificate..."
CN="qritserver"
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:$KEY_BITS -out $SERVER_KEY
openssl req -new -$FINGERPRINT -key $SERVER_KEY -subj "/CN=$CN/O=$ORG/OU=$OU" -out $SERVER_CSR
echo "Done"
echo
echo "----- Don't forget to open your browser and install your $CA_CERT certificates -----"
echo
echo "Run the next command form terminal to create the server certificate file"
#echo
#echo 'openssl x509 -req -extfile <(printf "subjectAltName=DNS.1:localhost,DNS.2:192.168.99.101,DNS.3:qritserver,IP.1:192.168.1.101,IP.2:192.168.100.7,IP.3:10.37.253.163") -days 365 -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -sha512 -out server.crt'
echo
sleep 1s
printf "subjectAltName=DNS.1:localhost,DNS.2:192.168.99.101,DNS.3:qritserver,IP.1:192.168.1.101,IP.2:192.168.100.7,IP.3:10.37.253.163" > tmp-ext-file
openssl x509 -req -extfile tmp-ext-file -days 365 -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -sha512 -out server.crt
rm tmp-ext-file
echo "Done"
echo
sleep 1s
echo "Test using:"
echo
echo "openssl x509 -in server.crt -text -noout"
openssl x509 -in server.crt -text -noout
