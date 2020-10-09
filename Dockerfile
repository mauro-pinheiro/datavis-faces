FROM mauro/node

ARG USER
ARG HOME=/home/$USER

USER root

WORKDIR $HOME/datavis/2020/face
RUN chown -R $USER $HOME/datavis/2020/face

USER $USER:docker

COPY --chown=$USER:docker package-lock.json .
COPY --chown=$USER:docker package.json .

RUN npm install

COPY --chown=$USER:docker . .

CMD npm start