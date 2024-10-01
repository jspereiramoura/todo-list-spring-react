FROM openjdk:17-jdk-slim AS builder
WORKDIR /workspace
ENV JAVA_VERSION=java17
ENV GRAALVM_VERSION=22.3.0
RUN apt-get update && apt-get install -y wget gcc g++ zlib1g-dev libstdc++6 libc6-dev
RUN wget -O graalvm.tar.gz https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-${GRAALVM_VERSION}/graalvm-ce-${JAVA_VERSION}-linux-amd64-${GRAALVM_VERSION}.tar.gz \
&& tar -xzf graalvm.tar.gz -C /opt \
&& rm graalvm.tar.gz
ENV GRAALVM_HOME=/opt/graalvm-ce-${JAVA_VERSION}-${GRAALVM_VERSION}
ENV PATH="${PATH}:${GRAALVM_HOME}/bin"
RUN gu install native-image
COPY . .
RUN chmod +x ./gradlew
RUN ./gradlew clean nativeCompile -Pnative --no-daemon

FROM debian:bullseye-slim
WORKDIR /app
COPY --from=builder /workspace/build/native/nativeCompile/application .
RUN chmod +x ./application
EXPOSE 8080
ENTRYPOINT ["./application"]