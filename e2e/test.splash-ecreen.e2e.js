describe('Splash Screen Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have splash screen', async () => {
    await expect(element(by.id('TEST_VIEW_SPLASH_SCREEN'))).toBeVisible();
    // await waitFor(element(by.id('TEST_VIEW_SPLASH_SCREEN')))
    //   .toBeVisible()
    //   .withTimeout(5000);
    await waitFor(element(by.id('TEST_VIEW_HOME_SCREEN')))
      .toBeVisible()
      .withTimeout(10000); // Wait for the home screen
  });
});
