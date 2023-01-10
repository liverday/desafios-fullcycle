FROM golang:1.19 as builder
WORKDIR /builder
COPY . . 
RUN go build -o entrypoint

FROM scratch
WORKDIR /app
COPY --from=builder /builder/entrypoint /app/entrypoint
CMD ["/app/entrypoint"]
