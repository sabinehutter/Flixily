<Flippy
              ref={(r) => this.flippyHorizontal = r}
              flipOnClick={false}
              style={FlippyStyle}
            >
            <DefaultCardContents>
              I flip horizontally with an event<br />
              <button type="button" onClick={() => this.flippyHorizontal.toggle()}>Toggle Me!</button>
            </DefaultCardContents>
          </Flippy>
          <FlippyOnHover flipDirection="horizontal"/>
          <FlippyOnClick flipDirection="horizontal"/>