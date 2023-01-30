aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t2p8h3b2

docker build -t public.ecr.aws/t2p8h3b2/fitness-app:latest .
docker push public.ecr.aws/t2p8h3b2/fitness-app:latest
docker rmi public.ecr.aws/t2p8h3b2/fitness-app:latest

# aws ecs update-service --cluster fitness --service fitness-svc --force-new-deployment