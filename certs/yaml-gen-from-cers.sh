#!/bin/bash
kubectl create secret tls qrit-server-tls --cert=server.crt --key=server.key
sleep 2s
kubectl create secret generic ca-secret --from-file=ca.crt=ca.crt
sleep 2s
eval 'echo $(kubectl get secret qrit-server-tls -o yaml) > server-cert-secret.yaml'
sleep 2s
eval 'echo $(kubectl get secret ca-secret -o yaml) > ca-secret.yaml'
sleep 2s
kubectl delete secret qrit-server-tls
kubectl delete secret ca-secret

